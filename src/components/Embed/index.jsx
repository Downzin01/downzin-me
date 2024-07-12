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
        }, 2000); // Simulando um atraso no carregamento

        return () => clearTimeout(timer);
    }, []);

    return (
        <main>
            <section className={styles.card}>
                <div className={`${styles.card__container} ${isLoading ? '' : styles.fadeIn}`}>
                    {isLoading ? (
                        <>
                            <Skeleton height={180} width={180} circle={true} baseColor="#323232" highlightColor="#444" />
                            <Skeleton height={30} width={`60%`} style={{ marginTop: 20, borderRadius: 20 }} baseColor="#323232" highlightColor="#444" />
                            <Skeleton height={16} width={`40%`} style={{ marginTop: 10, borderRadius: 20 }} baseColor="#323232" highlightColor="#444" />
                            <Skeleton height={40} width={`80%`} style={{ marginTop: 30, borderRadius: 20 }} baseColor="#323232" highlightColor="#444" />
                        </>
                    ) : (
                        <div className={styles.card__profile}>
                            <img
                                id="profile_image"
                                className={styles.card__image}
                                src="https://github.com/downzin01.png"
                                srcSet="https://github.com/downzin01.png 1x, https://github.com/downzin01@2x.png 2x"
                                alt="Imagem de perfil de Downzin"
                            />
                            <h1 className={styles.card__title}>Downzin</h1>
                            <p className={styles.card__description}>ただの人</p>
                            <IconSocial />
                        </div>
                    )}
                </div>
                {!isLoading && (
                    <div className={styles.card__donateButton}>
                        <img src={livepix} alt="" />
                        <a href="https://livepix.gg/downzin"> Gostaria de me ajudar doando? </a>
                    </div>
                )}
            </section>
        </main>
    );
}
