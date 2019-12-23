import React, { useState, useEffect } from 'react';

const HookCounterFive = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>You clicked {count} times</button>
    </div>
  );
};

export default HookCounterFive;
