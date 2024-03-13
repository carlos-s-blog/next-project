import { FC } from 'react';

import PostCard from '@/components/postCard/PostCard';

import { postApi } from '@/lib/api';

import styles from './blog.module.css';

interface BlogProps {
    searchParams: object;
}

const Blog: FC<BlogProps> = async ({ searchParams }) => {
    const posts = await postApi.posts();
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
