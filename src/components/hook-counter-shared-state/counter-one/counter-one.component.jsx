import React, { useContext, Fragment } from 'react';
import CounterTwo from '../counter-two/counter-two.component';
import { CountContext } from '../counter-context';

const CounterOne = () => {
  const countContext = useContext(CountContext);
  return (
    <Fragment>
      <div>
        <button onClick={() => countContext.countDispatch({ type: 'increment' })}>Plus 1</button>
        <button onClick={() => countContext.countDispatch({ type: 'decrement' })}>Minus 1</button>
        <button onClick={() => countContext.countDispatch({ type: 'reset' })}>Reset</button>
      </div>
      <CounterTwo />
    </Fragment>
  );
};

export default CounterOne;
