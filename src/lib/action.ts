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

export const register = async (formDate: FormData) => {
    const { username, email, password, passwordRepeat, img } = Object.fromEntries(formDate);
    if (password !== passwordRepeat) {
        return '密码不一致';
    }
    try {
        connectToMongo();
        const userSchema = await User.findOne({ username });
        if (userSchema) {
            return '用户名已存在';
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password as string, salt);

        console.log(hashedPassword);
        const newUser = new User({
            username,
            password: hashedPassword,
            img,
            email,
        });

        await newUser.save();
        console.log('save to db');
    } catch (error) {
        return '注册失败';
    }
    return '';
};

export const login = async (form: FormData) => {
    const { username, password } = Object.fromEntries(form);
    try {
        await signIn('credentials', { username: username as string, password: password as string });
        return '';
    } catch (error) {
        return { error: 'some error' };
    }
};
