import React, { useContext } from 'react';
import { CountContext } from '../counter-context';

const CounterThree = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      <button onClick={() => countContext.countDispatch({ type: 'increment' })}>Plus 1</button>
      <button onClick={() => countContext.countDispatch({ type: 'decrement' })}>Minus 1</button>
      <button onClick={() => countContext.countDispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default CounterThree;
