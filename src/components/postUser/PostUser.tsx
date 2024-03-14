import { FC } from 'react';

import { postApi } from '@/lib/api';

import styles from './postUser.module.css';

const PostUser: FC<{ userId: string }> = async ({ userId }) => {
    const user = await postApi.user(userId);

    return (
        <div className={styles.container}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>{user.username}</span>
        </div>
    );
};

export default PostUser;
