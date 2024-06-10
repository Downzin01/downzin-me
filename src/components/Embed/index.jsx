import React from 'react';
import styles from './Card.module.scss';
import IconSocial from './IconSocial';
import livepix from './IconSocial/img/livepix.png';

export default function Embed() {
    return (

            <main>
                <section className={styles.card}>
                    <div className={styles.card__container}>
                        <div className={styles.card__profile}>
                            <img
                                id="profile_image"
                                className={styles.card__image}
                                src="https://github.com/downzin01.png"
                                alt="Imagem de perfil de Downzin"
                            />
                            <h1 className={styles.card__title}>Downzin</h1>
                            <p className={styles.card__description}>ただの人</p>
                            <IconSocial />
                        </div>
                    </div>
                    <div className={styles.card__donateButton}>
                        <img src={livepix} alt="" />
                        <a href="https://livepix.gg/downzin"> Gostaria de me ajudar doando? </a>
                    </div>
                </section>
            </main>
    );
}
