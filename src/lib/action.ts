import { signIn, signOut } from '@/lib/auth';

export const handleGithubLogin = async () => {
    'use server';

    await signIn('github');
};

export const handleGithubLogout = async () => {
    'use server';

    await signOut();
};
