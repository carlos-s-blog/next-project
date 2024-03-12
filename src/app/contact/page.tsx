import Image from 'next/image';

import styles from './contact.module.css';

const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image className={styles.img} src="/contact.png" alt="contact" fill />
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form} action="">
                    <input type="text" placeholder="Name And Surname" />
                    <input type="text" placeholder="Email Address" />
                    <input type="text" placeholder="Phone Number (Optional)" />
                    <textarea placeholder="Message" name="" id="" cols={30} rows={10} />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
