import styles from './styles/Button.module.css';

export type Content = {
  content: string;
};

export function Button({content}: Content) {
  return (
    <button className={styles.container} type="submit">
      {content}
    </button>
  );
}
