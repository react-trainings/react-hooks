import React, { useReducer } from 'react';
import './hook-counter.reducer-complex.styles.css';

const initialState = {
  value: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { value: state.value + action.value };
    case 'decrement':
      return { value: state.value - action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const HookCounterReducerComplex = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter">
      <p>
        <b>Count: </b> {count.value}
      </p>
      <div className="button-group">
        <button className="counter-button" onClick={() => dispatch({ type: 'increment', value: 1 })}>
          Increment
        </button>
        <button className="counter-button" onClick={() => dispatch({ type: 'decrement', value: 1 })}>
          Decrement
        </button>
        <button className="counter-button" onClick={() => dispatch({ type: 'increment', value: 5 })}>
          Increment by 5
        </button>
        <button className="counter-button" onClick={() => dispatch({ type: 'decrement', value: 5 })}>
          Decrement by 5
        </button>
        <button className="counter-button" onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default HookCounterReducerComplex;
