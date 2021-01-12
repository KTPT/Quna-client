import styles from './styles/Answer.module.css';

export interface AnswerDetailProps {
  data: {
    id: number;
    questionId: number;
    contents: string;
    responderId?: number;
    createdAt: string;
    lastModifiedAt: string;
  };
}

export function AnswerDetail({data}: AnswerDetailProps) {
  return data ? (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.avatar}>
          <img src="/jobs_avatar.png" alt="avatar" />
        </div>
        <div className={styles.created}>{data.createdAt}</div>
      </div>
      <div className={styles.contents}>{data.contents}</div>
    </div>
  ) : (
    <>답변이 없다</>
  );
}
