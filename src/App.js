import React from 'react';
import './App.css';
import MainFrame from './MainFrame';
import { useState, useEffect } from 'react';
import HeaderRates from './HeaderRates';

function App() {
  const RATES_URL = 'https://api.exchangerate.host/latest';
  const [ rateEur, setRateEur ] = useState();
  const [ rateUsd, setRateUsd ] = useState();

  useEffect(() => {
    fetch(`${RATES_URL}?base=EUR`)
      .then(res => res.json())
      .then(data => setRateEur(data.rates[ 'UAH' ]))
  }, []);

  useEffect(() => {
    fetch(`${RATES_URL}?base=USD`)
      .then(res => res.json())
      .then(data => setRateUsd(data.rates[ 'UAH' ]))
  }, []);

  return (
    <React.Fragment>
      <header className="app-header" />
      <div className='app-content'>
        <div className='header-text-block'>
          <h1 className='header-text'>
            Currency Converter
          </h1>
          <HeaderRates
            rateEur={ rateEur.toFixed(2) }
            rateUsd={ rateUsd.toFixed(2) }
          />
        </div>

        <MainFrame
          url={ RATES_URL }
        />

      </div>
    </React.Fragment >
  );
}

export default App;
