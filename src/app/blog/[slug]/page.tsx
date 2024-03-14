import Image from 'next/image';

import { FC, Suspense } from 'react';

import PostUser from '@/components/postUser/PostUser';

import { postApi } from '@/lib/api';

import { SimpleBlogProps } from '@/lib/interface';

import styles from './singlePage.module.css';

const SimpleBlog: FC<SimpleBlogProps> = async ({ params }) => {
    const { slug } = params;

    const post = await postApi.post(slug);

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src="https://cdn.pixabay.com/photo/2023/05/06/20/21/reeds-7975080_1280.png"
                    alt=""
                    fill
                    className={styles.image}
                    priority
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    <Image
                        src="/avatar.jpg"
                        alt=""
                        width={30}
                        height={30}
                        className={styles.avatar}
                    />
                    <Suspense fallback={<div>Loading...</div>}>
                        <PostUser userId={post.userId} />
                    </Suspense>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Date</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>{post.desc}</div>
            </div>
        </div>
    );
};

export default SimpleBlog;
