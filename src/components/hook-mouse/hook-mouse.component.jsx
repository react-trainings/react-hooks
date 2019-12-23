import React, { useState, useEffect } from 'react';

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
    setX(e.screenX);
    setY(e.screenY);
  };

  useEffect(() => {
    console.log('useEffect called | component mounted');
    window.addEventListener('mousemove', logMousePosition);

    return () => {
      console.log('useEffect called | component unmounted');
      window.removeEventListener('mousemove', logMousePosition);
    };
  }, []);

  return (
    <div>
      <h3>
        Mouse Position: X: {x} and Y: {y}
      </h3>
    </div>
  );
};

export default HookMouse;
