import Image from 'next/image';

import { deleteUser, findUsers } from '@/lib/action';

import styles from './adminUsers.module.css';

const AdminUsers = async () => {
    const users = await findUsers();
    return (
        <div className={styles.container}>
            <h1>Users</h1>
            {users.map((user) => (
                <div className={styles.user} key={user.id}>
                    <div className={styles.detail}>
                        <Image src={user.img || '/noAvatar.png'} alt="" width={50} height={50} />
                        <span className={styles.username}>{user.username}</span>
                    </div>
                    <form action={deleteUser}>
                        <input type="hidden" name="id" value={user.id} />
                        <button className="userButton">Delete</button>
                    </form>
                </div>
            ))}
        </div>
    );
};

export default AdminUsers;
