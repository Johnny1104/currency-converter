import React, { useState, useEffect } from 'react';
import CurrencyPicker from './CurrencyPicker.js';
import ReverseButton from './ReverseButton';

function MainFrame() {

    const RATES_URL = 'https://api.exchangerate.host/latest';

    const [ currencyOptions, setCurrencyOptions ] = useState([]);
    const [ fromCurrency, setFromCurrency ] = useState();
    const [ toCurrency, setToCurrency ] = useState();

    useEffect(() => {
        fetch(RATES_URL)
            .then(res => res.json())
            .then(data => {
                setCurrencyOptions([ data.base, ...Object.keys(data.rates) ])
                setFromCurrency(data.base)
                setToCurrency(Object.keys(data.rates)[ 147 ])
            })
    }, []);

    return (
        <div className='main-frame'>
            <div className='main-content'>
                <div className='main-frame-row input-row'>
                    <CurrencyPicker
                        currencyOptions={ currencyOptions }
                        selectedCurrency={ fromCurrency }
                    />
                    <ReverseButton />
                    <CurrencyPicker
                        currencyOptions={ currencyOptions }
                        selectedCurrency={ toCurrency }
                    />
                </div>
                <div className='main-frame-row'>
                    {/* Conversion result */ }
                    <div className='conversion-result'>
                        <p className='conversion-result__base conversion-result__item'>21.00 US Dollars =</p>
                        <p className='conversion-result__final conversion-result__item'>22.12 Euros</p>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                    <p className='disclaimer__text'>
                        The rates are for informational purposes only
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MainFrame;