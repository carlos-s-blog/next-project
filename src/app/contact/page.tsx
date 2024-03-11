import Image from 'next/image';

import styles from './contact.module.css';

const Contact = () => {
    return (
        <div>
            <div className={styles.imageContainer}>
                <Image
                    src="https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF"
                    alt=""
                    fill
                />
            </div>
        </div>
    );
};

export default Contact;
