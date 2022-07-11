import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>i-consulting</title>
                <meta name='description' content='Defining Dialogue' />
                <link rel='icon' href='/logo.png' />
            </Head>

            <main className={styles.main}>
                <div className={styles.grid}>
                    <div className={styles.left}>
                        <Image
                            src='/logo.png'
                            alt='i-consulting logo'
                            height={128}
                            width={128}
                        />
                        <h1 className={styles.title}>i-Consulting</h1>
                    </div>

                    <div className={styles.divider} />

                    <div className={styles.right}>
                        <div className={styles.detail}>
                            <h2>Ehtesham Siddiqui</h2>
                            <h3>Founder & Sr.Consultant</h3>
                            <p>Dubai, UAE</p>
                        </div>
                        <div className={styles.contact}>
                            <p>+971 55 478 6688</p>
                            <a href='https://www.i-consulting.ae'>
                                <p>i-consulting.ae</p>
                            </a>
                            <a href='mailto:ehtesham@i-consulting.ae'>
                                <p>ehtesham@i-consulting.ae</p>
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>
                    . risk & wealth management . financial & legacy planning .
                    wills . insurance . healthcare . education & training . food
                    . real-estate. commodities . philanthropy
                </p>
            </footer>
        </div>
    );
};

export default Home;
