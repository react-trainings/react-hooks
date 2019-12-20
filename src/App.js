import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounterOne from './components/hook-counter-one/hook-counter-one.component';
import HookCounterTwo from './components/hook-counter-two/hook-counter-two.component';
import HookCounterThree from './components/hook-counter-three/hook-counter-three.component';
import HookCounterFour from './components/hook-counter-four/hook-counter-four.component';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h4 className="app-title">React Hooks</h4>
      </header>
      <main className="app-main">
        <HookCounterOne></HookCounterOne>
        <HookCounterTwo></HookCounterTwo>
        <HookCounterThree></HookCounterThree>
        <HookCounterFour></HookCounterFour>
      </main>
    </div>
  );
}

export default App;
