import React from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React learning tutorial</h1>
      </header>
      <main className = "App-main">
        <div className="tutorial-section">
          <h2>First component</h2>
          <div className="component-demo">
            <Button />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
