import { PlaceholderPosts, PostUserResponse } from './interface';

export const postApi = {
    posts: async (): Promise<PlaceholderPosts[]> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            next: { revalidate: 3600 },
        });

        if (!res.ok) {
            throw new Error('Somethind went weong');
        }

        return res.json();
    },

    post: async (slug: string): Promise<PlaceholderPosts> => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

        if (!res.ok) {
            throw new Error('Somethind went weong');
        }

        return res.json();
    },

    user: async (userId: number): Promise<PostUserResponse> => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            throw new Error('Somethind went weong');
        }

        return res.json();
    },
};
