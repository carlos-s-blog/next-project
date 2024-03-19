/* eslint-disable @typescript-eslint/no-base-to-string */
import Image from 'next/image';

import { FC, Suspense } from 'react';

import PostUser from '@/components/postUser/PostUser';

import { SimpleBlogProps } from '@/lib/interface';

import { findPost } from '@/lib/action';

import styles from './singlePage.module.css';

export const generateMetadata = async ({ params }: SimpleBlogProps) => {
    const { slug } = params;

    const post = await findPost(slug);

    return {
        title: post?.title,
        description: post?.desc,
    };
};

const SimpleBlog: FC<SimpleBlogProps> = async ({ params }) => {
    const { slug } = params;

    const post = await findPost(slug);

    return (
        <div className={styles.container}>
            {post && (
                <>
                    <div className={styles.imageContainer}>
                        <Image src={post.img} alt="" fill className={styles.image} priority />
                    </div>
                    <div className={styles.textContainer}>
                        <h1 className={styles.title}>{post.title}</h1>
                        <div className={styles.detail}>
                            <Suspense fallback={<div>Loading...</div>}>
                                <PostUser userId={post.userId} />
                            </Suspense>
                            <div className={styles.detailText}>
                                <span className={styles.detailTitle}>Date</span>
                                <span className={styles.detailValue}>
                                    {post.createdAt.toString().slice(4, 16)}
                                </span>
                            </div>
                        </div>
                        <div className={styles.content}>{post.desc}</div>
                    </div>
                </>
            )}
        </div>
    );
};

export default SimpleBlog;
