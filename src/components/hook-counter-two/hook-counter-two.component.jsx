import React, { useState } from 'react';

const HookCounterTwo = () => {
  let initialCount = 0;

  const [count, setCount] = useState(initialCount);
  const incrementBy5 = () => {
    setCount(prevCount => prevCount + 5);
  };

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={incrementBy5}>Increment by 5</button>
    </div>
  );
};

export default HookCounterTwo;
