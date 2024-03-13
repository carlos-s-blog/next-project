import { FC } from 'react';

import PostCard from '@/components/postCard/PostCard';

import styles from './blog.module.css';

interface BlogProps {
    searchParams: object;
}

export interface PlaceholderPosts {
    id: number;
    userId: number;
    title: string;
    body: string;
}

const getData = async (): Promise<PlaceholderPosts[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error('Somethind went weong');
    }

    return res.json();
};

const Blog: FC<BlogProps> = async ({ searchParams }) => {
    const posts = await getData();
    return (
        <div className={styles.container}>
            {posts.map((post) => {
                return (
                    <div className={styles.post} key={post.id}>
                        <PostCard post={post} />
                    </div>
                );
            })}
        </div>
    );
};

export default Blog;
