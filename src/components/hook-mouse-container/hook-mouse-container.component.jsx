import React, { useState } from 'react';
import HookMouse from '../hook-mouse/hook-mouse.component';

const HookMouseContainer = () => {
  const [displayMouse, setDisplayMouse] = useState(true);

  const handleOnClick = () => {
    setDisplayMouse(!displayMouse);
  };

  return (
    <div>
      <button onClick={handleOnClick}>{displayMouse ? 'Hide Mouse Coordinates' : 'Show Mouse Coordinates'}</button>
      {displayMouse && <HookMouse />}
    </div>
  );
};

export default HookMouseContainer;
