import React, { useState, useEffect } from 'react';

const HookCounterSix = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('useEffect - setting the count');
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
};

export default HookCounterSix;
