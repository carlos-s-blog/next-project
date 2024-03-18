'use server';

import bcrypt from 'bcryptjs';

import { signIn, signOut } from '@/lib/auth';

import { connectToMongo } from './utils';
import { User } from './models';

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
        connectToMongo();
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
        const res = await signIn('credentials', {
            username: username as string,
            password: password as string,
        });
        return res;
    } catch (error) {
        console.log(error);
        return { error: 'some error' };
    }
};
