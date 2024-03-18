import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';

import CredentialsProvider from 'next-auth/providers/credentials';

import bcrypt from 'bcryptjs';

import { connectToMongo } from './utils';
import { User } from './models';

const login = async (credentials: Record<string, unknown>) => {
    try {
        connectToMongo();
        const user = await User.findOne({ username: credentials.username });
        if (!user) {
            return { error: 'not find user' };
        }
        const isPasswordCorrect = await bcrypt.compare(
            credentials.password as string,
            user.password,
        );
        if (!isPasswordCorrect) {
            return { error: 'wrong crendentials' };
        }
        return user;
    } catch (error) {
        return { error: 'wrong crendentials' };
    }
};

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    providers: [
        Github({ clientId: process.env.GITHUB_ID, clientSecret: process.env.GITHUB_SECRET }),
        CredentialsProvider({
            async authorize(credentials) {
                const user = await login(credentials);
                return user;
            },
        }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (account?.provider === 'github') {
                connectToMongo();
                try {
                    const schemaUser = await User.findOne({ email: profile?.email });
                    if (!schemaUser) {
                        // 添加用户信息到MongoDB
                        const newUser = new User({
                            username: profile?.login,
                            email: profile?.email,
                            img: profile?.avatar_url,
                            isAdmin: false,
                        });
                        await newUser.save();
                    }
                } catch (error) {
                    console.log(error);
                    return false;
                }
            }
            return true;
        },
    },
});
