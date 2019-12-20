import React, { useState } from 'react';

const HookCounterFour = () => {
  const [items, setItems] = useState([]);

  const addItems = () => {
    setItems([...items, { id: items.length, value: Math.floor(Math.random() * 1000 + 1) }]);
  };

  const resetItems = () => {
    setItems([]);
  };

  return (
    <div>
      <button onClick={addItems}>Add Items</button>
      <button onClick={resetItems}>Reset</button>
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li>
            {item.id}: {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HookCounterFour;
