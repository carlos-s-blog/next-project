'use client';

import { useFormState } from 'react-dom';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import Link from 'next/link';

import { register } from '@/lib/action';

import styles from './registerForm.module.css';

const RegisterForm = () => {
    const [state, formAction] = useFormState(register, undefined);
    const router = useRouter();

    useEffect(() => {
        state?.success && router.push('/login');
    }, [state, router]);

    return (
        <form action={formAction} className={styles.form}>
            <input type="text" name="username" placeholder="username" />
            <input type="text" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <input type="password" name="passwordRepeat" placeholder="password again" />
            <button>Register</button>
            <p className="text-red-500">{state?.error}</p>
            <Link href="/login">
                Have an account? <b>Login</b>
            </Link>
        </form>
    );
};

export default RegisterForm;
