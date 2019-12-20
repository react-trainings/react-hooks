import React, { useState } from 'react';

const HookCounterOne = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>Count {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default HookCounterOne;
