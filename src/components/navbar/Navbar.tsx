import Link from 'next/link';

import { auth } from '@/lib/auth';

import Links from './links/Links';
import styles from './navbar.module.css';

const Navbar = async () => {
    const session = await auth();
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
                Logo
            </Link>
            <div>
                <Links session={session} />
            </div>
        </div>
    );
};

export default Navbar;
