import Link from 'next/link';

import { auth } from '@/lib/auth';

import { ProjectSession } from '@/lib/auth.config';

import Links from './links/Links';
import styles from './navbar.module.css';

const Navbar = async () => {
    const session: ProjectSession | null = (await auth()) as ProjectSession;
    console.log('session links:', session);
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
