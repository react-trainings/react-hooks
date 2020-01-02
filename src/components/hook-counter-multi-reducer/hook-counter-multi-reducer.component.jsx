import React, { useReducer } from 'react';

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

const HookCounterMultiReducer = () => {
  const [countOne, dispatchOne] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div className="counter">
        <h3>{countOne}</h3>
        <button onClick={() => dispatchOne({ type: 'increment' })}>Plus 1</button>
        <button onClick={() => dispatchOne({ type: 'decrement' })}>Minus 1</button>
        <button onClick={() => dispatchOne({ type: 'reset' })}>Reset</button>
      </div>
      <div className="counter">
        <h3>{countTwo}</h3>
        <button onClick={() => dispatchTwo({ type: 'increment' })}>Plus 1</button>
        <button onClick={() => dispatchTwo({ type: 'decrement' })}>Minus 1</button>
        <button onClick={() => dispatchTwo({ type: 'reset' })}>Reset</button>
      </div>
    </div>
  );
};

export default HookCounterMultiReducer;
