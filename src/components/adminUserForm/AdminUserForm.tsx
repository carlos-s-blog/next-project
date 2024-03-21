'use client';

import { useFormState } from 'react-dom';

import { addUser } from '@/lib/action';

import styles from './adminUserForm.module.css';

const AdminUserForm = () => {
    const [state, formAction] = useFormState(addUser, '');

    return (
        <div className={styles.container}>
            <form className={styles.container} action={formAction}>
                <h1>Add User</h1>
                <input type="text" name="username" placeholder="username" />
                <input type="text" name="email" placeholder="email" />
                <input type="text" name="password" placeholder="password" />
                <input type="text" name="img" />
                <select name="isAdmin">
                    <option value="false">Is Admin?</option>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                </select>
                <button>Add</button>
                {state}
            </form>
        </div>
    );
};

export default AdminUserForm;
