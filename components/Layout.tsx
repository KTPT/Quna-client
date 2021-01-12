import styles from './styles/Layout.module.css';

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
