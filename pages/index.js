import Head from 'next/head';
import Image from 'next/image';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/dist/client/link';
export default function Home() {
  return (
    <>
      <Head>
        <title> Ninja list | Home</title>
      </Head>
      <div>
        <meta name="keywords" content="ninjas"></meta>

        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}> hello Emna this is a list </p>
        <Link href="/ninjas">
          <a className={styles.btn}>see all Ninja Listing </a>
        </Link>
      </div>
    </>
  );
}
