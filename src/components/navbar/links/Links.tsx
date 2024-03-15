import { FC } from 'react';

import { handleGithubLogout } from '@/lib/action';

import { LinksSessionProps } from '@/lib/interface';

import styles from './links.module.css';
import NavLink from './navLink/NavLink';

const Links: FC<LinksSessionProps> = ({ session }) => {
    const links = [
        {
            title: 'HomePage',
            path: '/',
        },
        {
            title: 'Contact',
            path: '/contact',
        },
        {
            title: 'About',
            path: '/about',
        },
        {
            title: 'Blog',
            path: '/blog',
        },
    ];

    return (
        <div className={styles.links}>
            {links.map((link) => {
                return <NavLink item={link} key={link.title} />;
            })}
            {/* 在此处判断是否登录 是否为管理员 */}
            {session?.user ? (
                <>
                    {session.user?.isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
                    <form action={handleGithubLogout}>
                        <button className={styles.logout}>Logout</button>
                    </form>
                </>
            ) : (
                <NavLink item={{ title: 'Login', path: '/login' }} />
            )}
        </div>
    );
};

export default Links;
