import Image from 'next/image';

import styles from './about.module.css';

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subTitle}>About Agency</h2>
                <h1 className={styles.title}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta soluta tenetur
                    qui iste!
                </h1>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit
                    eveniet vitae rerum, modi error fugiat cum ducimus quis quibusdam! Voluptatibus
                    nostrum esse officia nemo modi possimus optio, culpa rem.
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image className={styles.img} src="/about.png" alt="" fill />
            </div>
        </div>
    );
};

export default About;
