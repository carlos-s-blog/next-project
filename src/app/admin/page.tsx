import { Suspense } from 'react';

import AdminPosts from '@/components/adminPosts/AdminPosts';
import AdminPostForm from '@/components/adminPostForm/AdminPostForm';

import AdminUsers from '@/components/adminUsers/AdminUsers';
import AdminUserForm from '@/components/adminUserForm/AdminUserForm';

import { auth } from '@/lib/auth';

import { ProjectSession } from '@/lib/auth.config';

import styles from './admin.module.css';

const Admin = async () => {
    const session = (await auth()) as ProjectSession;
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminPosts />
                    </Suspense>
                </div>
                <div className={styles.column}>
                    <AdminPostForm userId={session?.id} />
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminUsers />
                    </Suspense>
                </div>
                <div className={styles.column}>
                    <AdminUserForm />
                </div>
            </div>
        </div>
    );
};

export default Admin;
