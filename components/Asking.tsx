import Link from 'next/link';
import styles from './styles/Asking.module.css';
import {FocusEvent} from 'react';

export default function Asking() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>질문의 제목</div>

      <main className={styles.main}>질문의 내용</main>

      <footer className={styles.footer}>
        <div className={styles.writer}>작성자</div>
        <div className={styles.writer}>답변 지정자</div>
        <div className={styles.writer}>모야 이건</div>
        <button className={styles.button} type="button">
          버튼
        </button>
      </footer>
    </div>
  );
}
