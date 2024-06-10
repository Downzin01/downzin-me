import React from 'react';
import styles from './Nav.module.scss';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menuItems}>
                <li>
                    <Link to="/projetos" className={styles.menuItem}>
                        Projetos
                    </Link>
                </li>
                <li>
                    <Link to="/" className={styles.menuItem}>
                        Início
                    </Link>
                </li>
                <li>
                    <Link to="/sobre" className={styles.menuItem}>
                        Sobre
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
