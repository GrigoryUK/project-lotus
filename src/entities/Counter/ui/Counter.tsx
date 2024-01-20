import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const counterValue = useCounterValue();
  const { decrement, increment, add } = useCounterActions();

  const handleInc = () => {
    increment();
  };

  const handleDec = () => {
    decrement();
  };

  const handleAddFive = () => {
    add(5);
  };

  return (
    <div>
      <h1 data-testid='value-title'>{counterValue}</h1>
      <button onClick={handleAddFive} data-testid='increment-btn5'>
        add5
      </button>
      <button onClick={handleInc} data-testid='increment-btn'>
        increment
      </button>
      <button data-testid='decrement-btn' onClick={handleDec}>
        decrement
      </button>
    </div>
  );
};
