import React, { useContext } from 'react';
import { UserContext, SessionContext } from './../contexts';

const ComponentThree = () => {
  const user = useContext(UserContext);
  const session = useContext(SessionContext);

  return (
    <div>
      <h3>Displaying the values from the user contexts:</h3>
      <span>
        {user} - {session}
      </span>
    </div>
  );
};

export default ComponentThree;
