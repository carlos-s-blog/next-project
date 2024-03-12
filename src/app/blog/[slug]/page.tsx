import Image from 'next/image';

import styles from './singlePage.module.css';

const SimpleBlog = () => {
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
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image
                        src="/avatar.jpg"
                        alt=""
                        width={30}
                        height={30}
                        className={styles.avatar}
                    />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Terry Jefferson</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Date</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laborum, iure
                    tenetur itaque alias obcaecati. Asperiores minima sit facilis velit sapiente
                    labore, doloribus recusandae deserunt suscipit quisquam! Tempora, officia
                    commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laborum,
                    iure tenetur itaque alias obcaecati. Asperiores minima sit facilis velit
                    sapiente labore, doloribus recusandae deserunt suscipit quisquam! Tempora,
                    officia commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    laborum, iure tenetur itaque alias obcaecati. Asperiores minima sit facilis
                    velit sapiente labore, doloribus recusandae deserunt suscipit quisquam! Tempora,
                    officia commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    laborum, iure tenetur itaque alias obcaecati. Asperiores minima sit facilis
                    velit sapiente labore, doloribus recusandae deserunt suscipit quisquam! Tempora,
                    officia commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    laborum, iure tenetur itaque alias obcaecati. Asperiores minima sit facilis
                    velit sapiente labore, doloribus recusandae deserunt suscipit quisquam! Tempora,
                    officia commodi.
                </div>
            </div>
        </div>
    );
};

export default SimpleBlog;
