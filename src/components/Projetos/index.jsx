import React from 'react';
import styles from './Card.module.scss';
import omoriIcon from './OmoriBurger.png';

export default function Projetos() {
    return (
        <main>
            <section className={styles.ops}>
                <div className={styles.ops__container}>
                    <img className={styles.ops__img} src={omoriIcon} alt="" />
                    <h1 className={styles.ops__title}>Ops! Essa página está em desenvolvimento.</h1>
                    <p className={styles.ops__description}>
                        Eita! Essa página ainda está sendo produzida :O
                    </p>
                </div>
            </section>
        </main>
    );
}
