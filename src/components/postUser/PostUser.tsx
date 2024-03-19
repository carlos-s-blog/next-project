import { FC } from 'react';

import Image from 'next/image';

import { findUser } from '@/lib/action';

import styles from './postUser.module.css';

const PostUser: FC<{ userId: string }> = async ({ userId }) => {
    const user = await findUser(userId);

    return (
        <div className={styles.container}>
            {user && (
                <Image src={user.img} alt="" width={30} height={30} className={styles.avatar} />
            )}
            <div className={styles.texts}>
                <span className={styles.title}>Author</span>
                <span className={styles.username}>{user?.username}</span>
            </div>
        </div>
    );
};

export default PostUser;
