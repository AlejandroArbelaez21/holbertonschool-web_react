import React from 'react';
import logo from './logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" name='email' id="email"></input>
        <label htmlFor="password">Password:</label>
        <input type="password" name='password' id="password"></input>
        <button>Ok</button>
      </body>
      <footer className='App-footer'>
        <p>Copyright { getFullYear() } - { getFooterCopy() } </p>
      </footer>
    </div>
  );
}

export default App;
