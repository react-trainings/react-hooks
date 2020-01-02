import React, { useReducer } from 'react';
import CounterOne from './counter-one/counter-one.component';
import { CountContext } from './counter-context';

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const HookCounterSharedState = () => {
  const [countState, countDispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ countState, countDispatch }}>
      <div>
        <span> Global Counter: {countState}</span>
        <CounterOne></CounterOne>
      </div>
    </CountContext.Provider>
  );
};

export default HookCounterSharedState;
