import styles from './styles/Question.module.css';

interface DetailProps {
  data: {
    id: number;
    title: string;
    contents: string;
    responderId?: number;
    createdAt: string;
    lastModifiedAt: string;
  };
}

export default function QuestionDetail({data}: DetailProps) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.avatar}>
            <img src="/jobs_avatar.png" alt="avatar" />
          </div>
          <div className={styles.created}>{data.createdAt}</div>
        </div>
        <div className={styles.title}>{data.title}</div>
      </div>
      <div className={styles.contents}>{data.contents}</div>
    </div>
  );
}
