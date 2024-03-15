import { signIn, signOut } from './auth';

export const handleGithubLogin = async () => {
    'use server';

    await signIn('github');
};

export const handleGithubLogout = async () => {
    'use server';

    await signOut();
};
