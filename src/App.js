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
            21 USD to EUR - Convert US Dollars to Euros
          </h1>
          <h1 className='header-text'>
            Currency Converter
          </h1>
        </div>

        <MainFrame />

      </div>
    </React.Fragment >
  );
}

export default App;
