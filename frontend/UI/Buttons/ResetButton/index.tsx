import styles from './ResetButton.module.css';

type ResetButtonProps = {
  // Inline comment
  reset: () => void;
};

// a minor comment

export const ResetButton = ({ reset }: ResetButtonProps) => {
  return (
    <div onClick={reset} className={styles['modern-button']}>
      Reset
    </div>
  );
};
