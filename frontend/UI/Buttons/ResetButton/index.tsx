import styles from './ResetButton.module.css';
// SOME DUMMY COMMENTO

type ResetButtonProps = {
  reset: () => void;
};

export const ResetButton = ({ reset }) => {
  return (
    <div onClick={reset} className={styles['modern-button']}>
      Reset
    </div>
  );
};
