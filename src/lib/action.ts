'use server';

import bcrypt from 'bcryptjs';

import { revalidatePath } from 'next/cache';

import { signIn, signOut } from '@/lib/auth';

import { MongoPost, MongoUser } from '@/lib/mongoInterface';

import { connectToMongo } from './utils';
import { Post, User } from './models';

export const handleGithubLogin = async () => {
    await signIn('github');
};

export const handleGithubLogout = async () => {
    await signOut();
};

export const register = async (pre: any, formDate: FormData) => {
    const { username, email, password, passwordRepeat, img } = Object.fromEntries(formDate);
    if (password !== passwordRepeat) {
        return { error: '密码不一致' };
    }
    try {
        await connectToMongo();
        const userSchema = await User.findOne({ username });
        if (userSchema) {
            return { error: '用户名已存在' };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password as string, salt);

        const newUser = new User({
            username,
            password: hashedPassword,
            img,
            email,
        });

        await newUser.save();
        return { success: '注册成功' };
    } catch (error) {
        return { error: '注册失败' };
    }
};

export const login = async (pre: any, form: FormData) => {
    const { username, password } = Object.fromEntries(form);
    try {
        await signIn('credentials', {
            username: username as string,
            password: password as string,
        });
        return { success: 'login success' };
    } catch (error) {
        console.log(error);

        if ((error as Error).message.includes('CredentialsSignin')) {
            return { error: 'Invalid username or password' };
        }
        throw error;
    }
};

/// mongo数据
export const findPosts = async (): Promise<MongoPost[]> => {
    await connectToMongo();
    return Post.find();
};

export const findPost = async (slug: string): Promise<MongoPost | null> => {
    await connectToMongo();
    return Post.findOne({ slug });
};

export const addPost = async (prevState: any, formData: FormData) => {
    'use server';

    const { title, desc, slug, img, userId } = Object.fromEntries(formData);
    try {
        await connectToMongo();
        const newPost = new Post({
            title,
            desc,
            slug,
            img,
            userId,
        });
        await newPost.save();
        return '添加成功';
    } catch (e) {
        return '添加失败';
    }
};

export const deletePost = async (formData: FormData) => {
    'use server';

    const { id } = Object.fromEntries(formData);
    console.log(id);
    await connectToMongo();

    await Post.findByIdAndDelete(id);
};

export const findUser = async (userId: string): Promise<MongoUser | null> => {
    await connectToMongo();
    return User.findById(userId);
};

export const findUsers = async (): Promise<MongoUser[]> => {
    await connectToMongo();
    return User.find();
};

export const addUser = async (prevState: any, formDate: FormData) => {
    try {
        await connectToMongo();
        const { username, email, password, img, isAdmin } = Object.fromEntries(formDate);

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password as string, salt);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img,
            isAdmin,
        });
        await newUser.save();
        revalidatePath('/admin');
        return 'add user success';
    } catch (error) {
        return 'add user error';
    }
};

export const deleteUser = async (formData: FormData) => {
    'use server';

    await connectToMongo();
    const { id } = Object.fromEntries(formData);
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    revalidatePath('/admin');
};
