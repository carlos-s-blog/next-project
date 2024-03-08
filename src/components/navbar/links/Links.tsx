import styles from './links.module.css';
import NavLink from './navLink/NavLink';

const Links = () => {
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

    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.links}>
            {links.map((link) => {
                return <NavLink item={link} key={link.title} />;
            })}
            {/* 在此处判断是否登录 是否为管理员 */}
            {session ? (
                <>
                    {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
                    <button className={styles.logout}>Logout</button>
                </>
            ) : (
                <NavLink item={{ title: 'Login', path: '/login' }} />
            )}
        </div>
    );
};

export default Links;
