import React, { useState, useEffect } from 'react';
import styles from './Card.module.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import IconSocial from './IconSocial';
import livepix from './IconSocial/img/livepix.png';

export default function Embed() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <main>
            <section className={styles.card}>
                <div className={styles.card__container}>
                    <div className={styles.card__profile}>
                        {isLoading ? (
                            <>
                                <Skeleton
                                    height={180}
                                    width={180}
                                    circle={true}
                                    baseColor="#323232"
                                    highlightColor="#444"
                                />
                            </>
                        ) : (
                            <img
                                id="profile_image"
                                className={`${styles.card__image} ${isLoading ? '' : styles.fadeIn}`}
                                src="https://github.com/downzin01.png"
                                srcSet="https://github.com/downzin01.png 1x, https://github.com/downzin01@2x.png 2x"
                                alt="Imagem de perfil de Downzin"
                            />
                        )}
                        <h1 className={styles.card__title}>Downzin</h1>
                        <p className={styles.card__description}>ただの人</p>
                        <IconSocial />
                    </div>
                </div>
                <div className={styles.card__donateButton}>
                    <img src={livepix} alt="logo do livepix" />
                    <a href="https://livepix.gg/downzin"> Gostaria de me ajudar doando? </a>
                </div>
            </section>
        </main>
    );
}
