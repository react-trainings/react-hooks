import React, { useState } from 'react';

const HookCounterThree = () => {
  const [name, setName] = useState({ firstName: '', lastName: '' });

  return (
    <div>
      <form>
        <input type="text" onChange={e => setName({ ...name, firstName: e.target.value })} />
        <input type="text" onChange={e => setName({ ...name, lastName: e.target.value })} />
      </form>
      <h2>
        {' '}
        You name is {name.firstName} {name.lastName}
      </h2>
    </div>
  );
};

export default HookCounterThree;
