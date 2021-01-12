import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <Link href={'/answer/create'}>
        <button>답변 남기기</button>
      </Link>
    </>
  );
}
