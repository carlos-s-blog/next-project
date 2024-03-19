'use client';

import { useFormState } from 'react-dom';

import { addPost } from '@/lib/action';

import styles from './adminPostForm.module.css';

const AdminPostForm = ({ userId }: { userId: string }) => {
    const [state, formAction] = useFormState(addPost, undefined);

    return (
        <form className={styles.container} action={formAction}>
            <h1>Add Post</h1>
            <input type="hidden" name="userId" value={userId} />
            <input type="text" name="title" placeholder="title" />
            <input type="text" name="slug" placeholder="slug" />
            <input type="text" name="img" placeholder="img" />
            <textarea name="desc" placeholder="desc" rows={10} />
            <button>Add</button>
            {state && state.error}
        </form>
    );
};

export default AdminPostForm;
