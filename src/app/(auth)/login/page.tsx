import { handleGithubLogin } from '@/lib/action';

import LoginForm from '@/components/loginForm/LoginForm';

import styles from './login.module.css';

const Login = async () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form action={handleGithubLogin} className={styles.github}>
                    <button>Login with Github</button>
                </form>
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
