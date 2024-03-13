import { FC } from 'react';

import { postApi } from '@/lib/api';

import styles from './postUser.module.css';

const PostUser: FC<{ userId: number }> = async ({ userId }) => {
    const { username } = await postApi.user(userId);

    return (
        <div className={styles.container}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>{username}</span>
        </div>
    );
};

export default PostUser;
