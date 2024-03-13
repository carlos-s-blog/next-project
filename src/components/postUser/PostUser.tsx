import { FC } from 'react';

import styles from './postUser.module.css';

interface PostUserResponse {
    id: number;
    name: string;
    username: string;
}

const getData = async (userId: number): Promise<PostUserResponse> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Somethind went weong');
    }

    return res.json();
};

const PostUser: FC<{ userId: number }> = async ({ userId }) => {
    const { username } = await getData(userId);

    return (
        <div className={styles.container}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>{username}</span>
        </div>
    );
};

export default PostUser;
