import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Asking from '../components/Asking';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <div>Quna</div>
        <Asking />
      </Layout>
    </>
  );
}
