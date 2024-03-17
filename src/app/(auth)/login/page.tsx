import { handleGithubLogin, login } from '@/lib/action';

import styles from './login.module.css';

const Login = async () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form action={login} className={styles.credentials}>
                    <input type="text" name="username" placeholder="username" />
                    <input type="password" name="password" placeholder="password" />
                    <button>Login with Credentials</button>
                </form>
                <form action={handleGithubLogin} className={styles.github}>
                    <button>Login with Github</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
