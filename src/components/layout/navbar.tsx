import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <h1 className={styles.title}>Taskboard</h1>
        </nav>
    );
}