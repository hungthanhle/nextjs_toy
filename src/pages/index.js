// pages/index.js

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Toy App</title>
        <meta name="description" content="Mô hình pokemon, mô hình robot biến hình transformers, mô hình gundam Hùng Lê" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        {/* Header content goes here */}
        <h1>Toy Store</h1>
      </header>

      <main className={styles.main}>
        <AwesomeSlider>
          <div>
            <Link href="/pokemon">
              <div className={styles.imageContainer}>
                <img src="/images/pokemon.jpg" alt="Pokemon" />
              </div>
              <p>Mô hình Pokemon</p>
            </Link>
          </div>
          <div>
            <div className={styles.imageContainer}>
              <img src="/images/gundam.jpg" alt="Gundam" />
            </div>
            <p>Mô hình Gundam</p>
          </div>
          <div>
            <div className={styles.imageContainer}>
              <img src="/images/transformers.jpg" alt="Transformers" />
            </div>
            <p>Mô hình Robot biến hình Transformers</p>
          </div>
          </AwesomeSlider>
      </main>

      <footer className={styles.footer}>
        {/* Footer content goes here */}
        <p>&copy; 2024 Hùng Lê, Inc.</p>
      </footer>
    </div>
  );
}
