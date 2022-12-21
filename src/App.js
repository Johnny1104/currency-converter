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
        </div>
      </div>
    </React.Fragment >
  );
}

export default App;