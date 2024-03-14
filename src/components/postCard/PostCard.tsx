import Image from 'next/image';

import Link from 'next/link';

import { FC } from 'react';

import { MongoPost } from '../../lib/mongoInterface';

import styles from './postCard.module.css';

const PostCard: FC<{ post: MongoPost }> = ({ post }) => {
    const { title, desc, createdAt } = post;
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imageContainer}>
                    <Image className={styles.image} src={post.img} alt="" fill priority />
                </div>
                <span className={styles.data}>{createdAt.toDateString().slice(4, 16)}</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.desc}>{desc}</p>
                <Link className={styles.link} href={`blog/${post.slug}`}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
