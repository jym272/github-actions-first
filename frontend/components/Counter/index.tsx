import styles from './Counter.module.css';
import { useEffect, useReducer, useState } from 'react';
import { ResetButton } from '../../UI';

type Action =
  | { type: 'set'; payload: number }
  | { type: 'reset' }
  | { type: 'increment' };
type State = { count: number; setFromLocalStorage: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'set':
      return { count: action.payload, setFromLocalStorage: true };
    case 'reset':
      return {
        ...state,
        count: 0
      };
    case 'increment':
      return {
        ...state,
        count: state.count + 1
      };
    default:
      throw new Error('Unknown action type');
  }
};

export const Counter = () => {
  const [intervalValue, setIntervalValue] = useState<NodeJS.Timer | null>(null);
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    setFromLocalStorage: false
  });

  useEffect(() => {
    const initNumber = Number(window.localStorage.getItem('count') || 0);
    dispatch({ type: 'set', payload: initNumber });
  }, []);
  useEffect(() => {
    if (state.setFromLocalStorage) {
      window.localStorage.setItem('count', state.count.toString());
    }
  }, [state]);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: 'increment' });
    }, 1000);
    setIntervalValue(interval);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.counter}>Counter!</div>
        <span className={styles.value}>
          {state.setFromLocalStorage && state.count}
        </span>
        <ResetButton
          reset={() => {
            clearInterval(intervalValue!);
            setIntervalValue(
              setInterval(() => {
                dispatch({ type: 'increment' });
              }, 1000)
            );
            dispatch({ type: 'reset' });
          }}
        />
      </div>
    </>
  );
};
