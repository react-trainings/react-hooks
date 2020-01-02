import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import HomePage from './pages/home-page/home-page.component';
import HookCounterOne from './components/hook-counter-one/hook-counter-one.component';
import HookCounterTwo from './components/hook-counter-two/hook-counter-two.component';
import HookCounterThree from './components/hook-counter-three/hook-counter-three.component';
import HookCounterFour from './components/hook-counter-four/hook-counter-four.component';
import HookCounterFive from './components/hook-counter-five/hook-counter-five.component';
import HookCounterSix from './components/hook-counter-six/hook-counter-six.component';
import HookMouse from './components/hook-mouse/hook-mouse.component';
import HookMouseContainer from './components/hook-mouse-container/hook-mouse-container.component';
import HookCounterInterval from './components/hook-counter-interval/hook-counter-interval.components';
import HookDataFetching from './components/hook-data-fetching/hook-data-fetching.component';
import HookDataFetchingTwo from './components/hook-data-fetching-two/hook-data-fetching-two.component';
import HookDataFetchingThree from './components/hook-data-fetching-three/hook-data-fetching-three.component';
import HookCounterContextApi from './components/hook-counter-context-api/hook-counter-context-api.component';
import HookCounterReducer from './components/hook-counter-reducer/hook-counter.reducer.component';
import HookCounterReducerComplex from './components/hook-counter-reducer-complex/hook-counter.reducer-complex.component';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h4 className="app-title">React Hooks</h4>
      </header>
      <main className="app-main">
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/HookCounterOne" component={HookCounterOne} />
          <Route path="/HookCounterTwo" component={HookCounterTwo} />
          <Route path="/HookCounterThree" component={HookCounterThree} />
          <Route path="/HookCounterFour" component={HookCounterFour} />
          <Route path="/HookCounterFive" component={HookCounterFive} />
          <Route path="/HookCounterSix" component={HookCounterSix} />
          <Route path="/HookMouse" component={HookMouse} />
          <Route path="/HookMouseContainer" component={HookMouseContainer} />
          <Route path="/HookCounterInterval" component={HookCounterInterval} />
          <Route path="/HookDataFetching" component={HookDataFetching} />
          <Route path="/HookDataFetchingTwo" component={HookDataFetchingTwo} />
          <Route path="/HookDataFetchingThree" component={HookDataFetchingThree} />
          <Route path="/HookCounterContextApi" component={HookCounterContextApi} />
          <Route path="/HookCounterReducer" component={HookCounterReducer} />
          <Route path="/HookCounterReducerComplex" component={HookCounterReducerComplex} />
          <Redirect to="/home" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
