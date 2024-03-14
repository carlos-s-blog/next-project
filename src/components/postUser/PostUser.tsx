import { FC } from 'react';

import Image from 'next/image';

import { postApi } from '@/lib/api';

import styles from './postUser.module.css';

const PostUser: FC<{ userId: string }> = async ({ userId }) => {
    const user = await postApi.user(userId);

    return (
        <div className={styles.container}>
            <Image src={user.img} alt="" width={30} height={30} className={styles.avatar} />
            <div className={styles.texts}>
                <span className={styles.title}>Author</span>
                <span className={styles.username}>{user.username}</span>
            </div>
        </div>
    );
};

export default PostUser;
