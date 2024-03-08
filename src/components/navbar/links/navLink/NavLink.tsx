'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import styles from './navLink.module.css';

interface ItemProps {
    item: {
        title: string;
        path: string;
    };
}

const NavLink: FC<ItemProps> = ({ item }) => {
    const pathName = usePathname();

    return (
        <Link
            href={item.path}
            className={`${styles.container} ${pathName === item.path && styles.active}`}
        >
            {item.title}
        </Link>
    );
};

export default NavLink;
