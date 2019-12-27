import React from 'react';
import ComponentOne from './componet-one/componet-one.componet';
import { UserContext, SessionContext } from './contexts';

const HookCounterContextApi = () => {
  return (
    <div>
      <UserContext.Provider value={'Devvrat'}>
        <SessionContext.Provider value="Technology">
          <ComponentOne></ComponentOne>
        </SessionContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default HookCounterContextApi;
