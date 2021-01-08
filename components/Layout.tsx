import Head from 'next/head';
import Link from 'next/link';
import styles from './styles/Layout.module.css';

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className={styles.container}>
      <main>{children}</main>
    </div>
  );
}
