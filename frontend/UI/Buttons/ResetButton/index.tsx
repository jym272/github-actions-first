import styles from './ResetButton.module.css'
// SOME DUMMY COMMENTO
export const ResetButton =({reset}:ResetButtonProps) => {
    return <div onClick={reset} className={styles["modern-button"]}>Reset</div>
}

type ResetButtonProps = {
    reset: () => void
}