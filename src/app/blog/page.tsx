import { FC } from 'react';

import { Metadata } from 'next';

import PostCard from '@/components/postCard/PostCard';

import { findPosts } from '@/lib/action';

import styles from './blog.module.css';

interface BlogProps {
    searchParams: object;
}

export const metadata: Metadata = {
    title: 'Blogs',
    description: 'next app blog page',
};

const Blog: FC<BlogProps> = async ({ searchParams }) => {
    const posts = await findPosts();
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
