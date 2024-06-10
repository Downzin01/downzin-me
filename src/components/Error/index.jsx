import React from 'react';
import styles from './Error404.module.scss';
import omoriIcon from './OmoriBurger.png';

export default function Error() {
    return (
        <main>
            <section className={styles.Error404}>
                <div className={styles.Error404__container}>
                    <img className={styles.Error404__img} src={omoriIcon} alt="" />
                    <h1 className={styles.Error404__title}>Ops! Parece que você se perdeu.</h1>
                    <p className={styles.Error404__description}>
                        Ops! Parece que você encontrou uma área secreta!
                    </p>
                    <a href="/">
                        <button className={styles.Error404__button}>Ir para página</button>
                    </a>
                </div>
            </section>
        </main>
    );
}
