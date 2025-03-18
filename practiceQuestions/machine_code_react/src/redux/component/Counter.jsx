import { useSelector, useDispatch } from 'react-redux';

// local imports
import { counterSliceAction } from '../slices/slice';
import styles from './Counter.module.css';

const CounterRedux = () => {
  const count = useSelector((store) => store.counter.count);
  const dispatch = useDispatch();

  //   handler functions
  const onDecrementHandler = (event) => {
    if (count <= 0) return;
    dispatch(counterSliceAction?.decrement())
  };

  const onIncrementHandler = (event) => {
    dispatch(counterSliceAction?.increment());
  };

  const onResetHandler = (event) => {
    dispatch(counterSliceAction?.reset())
  };
  return (
    <div className={styles.counter_container}>
      <h1>Counter Machine Codings</h1>
      <h1>{count}</h1>
      <div className={styles.button_container}>
        <button onClick={onDecrementHandler}>Decrement</button>
        <button onClick={onIncrementHandler}>Increment</button>
        <button onClick={onResetHandler}>Reset</button>
      </div>
    </div>
  );
};

export default CounterRedux;
