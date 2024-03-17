import RegisterForm from '@/components/registerForm/RegisterForm';

import styles from './register.module.css';

const Register = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <RegisterForm />
            </div>
        </div>
    );
};

export default Register;
