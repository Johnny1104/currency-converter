import React from 'react';
import './App.css';

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


        <div className='main-frame'>
          <div className='main-content'>
            <div className='main-frame-row input-row'>

              {/* picker 1  */ }
              <div className='currency-picker'>
                <label htmlFor='fromCurrency' className='currency-picker__label'>From</label>
                <div className='input-wrapper'>
                  <input type='number' name='fromCurrency' className='currency-picker__input' min='0' defaultValue={ 0 }></input>
                  <div className='currency-picker__select'>
                    <select>
                      <option value="Option 1">UAH</option>
                      <option value="Option 2">USD</option>
                      <option value="Option 3">CAD</option>
                      <option value="Option 4">RUP</option>
                      <option value="Option 5">OOO</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className='reverse-button'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                </svg>

              </div>

              {/* Picker 2 */ }
              <div className='currency-picker'>
                <label htmlFor='fromCurrency' className='currency-picker__label'>From</label>
                <div className='input-wrapper'>
                  <input type='number' name='fromCurrency' className='currency-picker__input'></input>
                  <div className='currency-picker__select'>
                    <select>
                      <option value="Option 1">UAH</option>
                      <option value="Option 2">USD</option>
                      <option value="Option 3">CAD</option>
                      <option value="Option 4">RUP</option>
                      <option value="Option 5">OOO</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* picker end */ }
            </div>
            <div className='main-frame-row'>
              {/* Conversion result */ }
              <div className='conversion-result'>
                <p className='conversion-result__base conversion-result__item'>21.00 US Dollars =</p>
                <p className='conversion-result__final conversion-result__item'>22.12<span className='conversion-result__final_grey-text'>3456</span> Euros</p>
                <p className='conversion-result__disclaimer'>Click on the number to copy</p>
              </div>

              <div className='currency-rates'>
                <p className='currency-rates__item'>
                  1 USD = 0.940450 EUR
                </p>
                <p className='currency-rates__item'>
                  1 USD = 0.940450 EUR
                </p>
              </div>
            </div>

            {/* Disclaimer */ }
            <div className='disclaimer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              <p className='disclaimer__text'>
                The rates are for informational purposes only
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment >
  );
}

export default App;
