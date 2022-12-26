import React from 'react';
import './App.css';
import MainFrame from './MainFrame';
import { useState, useEffect } from 'react';
import HeaderRates from './HeaderRates';
import { fetchRates, validateNumber } from './utils/utils'

function App() {
  const RATES_URL = 'https://api.exchangerate.host/latest';
  const [ rateEur, setRateEur ] = useState();
  const [ rateUsd, setRateUsd ] = useState();

  useEffect(() => {
    fetchRates(RATES_URL, 'EUR', setRateEur)
    fetchRates(RATES_URL, 'USD', setRateUsd)
  }, [])

  return (
    <React.Fragment>
      <header className="app-header" />
      <div className='app-content'>
        <div className='header-text-block'>
          <h1 className='header-text'>
            Currency Converter
          </h1>
          <HeaderRates
            rateEur={ validateNumber(rateEur).toFixed(2) }
            rateUsd={ validateNumber(rateUsd).toFixed(2) }
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
