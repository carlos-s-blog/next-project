import PostCard from '@/components/postCard/PostCard';

import styles from './blog.module.css';

const Blog = ({ params, searchParams }: any) => {
    console.log(params);
    console.log(searchParams);
    return (
        <div className={styles.container}>
            <div className={styles.post}>
                <PostCard />
            </div>
            <div className={styles.post}>
                <PostCard />
            </div>
            <div className={styles.post}>
                <PostCard />
            </div>
            <div className={styles.post}>
                <PostCard />
            </div>
        </div>
    );
};

export default Blog;
