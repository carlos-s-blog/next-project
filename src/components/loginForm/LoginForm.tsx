'use client';

import { useFormState } from 'react-dom';

import Link from 'next/link';

import { login } from '@/lib/action';

import styles from './loginForm.module.css';

const LoginForm = () => {
    const [state, formAction] = useFormState(login, undefined);

    return (
        <>
            <form action={formAction} className={styles.credentials}>
                <input type="text" name="username" placeholder="username" />
                <input type="password" name="password" placeholder="password" />
                <button>Login with Credentials</button>
            </form>

            <p className="text-red-500">{state?.error}</p>
            <Link href="/register">
                Not have an account? <b>Register</b>
            </Link>
        </>
    );
};

export default LoginForm;
