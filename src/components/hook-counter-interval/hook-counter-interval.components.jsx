import React, { useState, useEffect } from 'react';

const HookCounterInterval = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(prevCount => prevCount + 1);
    // setCount(count + 1); wont work as useEffect is not tracing the count value
  };

  useEffect(() => {
    console.log('useEffect called | component mounted');
    const tickInterval = setInterval(tick, 1000);

    return () => {
      console.log('useEffect called | component unmounted');
      clearInterval(tickInterval);
    };
  }, []);

  return (
    <div>
      <h1>Counter: {count}</h1>
    </div>
  );
};

export default HookCounterInterval;
