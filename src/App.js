import React from 'react';
import './App.css';
import MainFrame from './MainFrame';

function App() {
  return (
    <React.Fragment>
      <header className="app-header" />
      <div className='app-content'>
        <div className='header-text-block'>
          <h1 className='header-text'>
            Currency Converter
          </h1>
          <h2 className='header-text sub-header-text'>
            1 USD = 40.00 UAH | 1 EUR = 40.00 UAH
          </h2>
        </div>

        <MainFrame />

      </div>
    </React.Fragment >
  );
}

export default App;
