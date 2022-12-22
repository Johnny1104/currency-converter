import React, { useState, useEffect } from 'react';
import ConversionResult from './ConversionResult.js';
import CurrencyPicker from './CurrencyPicker.js';
import CurrencyRates from './CurrencyRates.js';
import Disclaimer from './Disclaimer.js';
import ReverseButton from './ReverseButton';

function MainFrame() {

    const RATES_URL = 'https://api.exchangerate.host/latest';

    const [ currencyOptions, setCurrencyOptions ] = useState([]);
    const [ fromCurrency, setFromCurrency ] = useState();
    const [ toCurrency, setToCurrency ] = useState();
    const [ exchangeRate, setExchangeRate ] = useState();
    const [ amount, setAmount ] = useState();
    const [ amountInFromCurrency, setAmountInFromCurrency ] = useState(true);

    let toAmount, fromAmount
    if (amountInFromCurrency) {
        fromAmount = amount
        toAmount = amount * exchangeRate
    } else {
        toAmount = amount
        fromAmount = amount / exchangeRate
    }

    useEffect(() => {
        fetch(RATES_URL)
            .then(res => res.json())
            .then(data => {
                const toCurrencyDefalut = 'UAH';
                setCurrencyOptions([ data.base, ...Object.keys(data.rates) ])
                setFromCurrency(data.base)
                setToCurrency(toCurrencyDefalut)
                setExchangeRate(data.rates[ toCurrencyDefalut ])
            })
    }, []);

    useEffect(() => {
        if (fromCurrency != null && toCurrency != null) {
            fetch(`${RATES_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
                .then(res => res.json())
                .then(data => setExchangeRate(data.rates[ toCurrency ]))
        }
    }, [ fromCurrency, toCurrency ])

    function handleFromAmountChange(e) {
        setAmount(e.target.value);
        setAmountInFromCurrency(true);
    };

    function handleToAmountChange(e) {
        setAmount(e.target.value);
        setAmountInFromCurrency(false);
    };


    return (
        <div className='main-frame'>
            <div className='main-content'>
                <div className='main-frame-row input-row'>
                    <CurrencyPicker
                        currencyOptions={ currencyOptions }
                        selectedCurrency={ fromCurrency }
                        onChangeCurrency={ e => setFromCurrency(e.target.value) }
                        onChangeAmount={ handleFromAmountChange }
                        amount={ fromAmount }
                    />
                    <ReverseButton />
                    <CurrencyPicker
                        currencyOptions={ currencyOptions }
                        selectedCurrency={ toCurrency }
                        onChangeCurrency={ e => setToCurrency(e.target.value) }
                        onChangeAmount={ handleToAmountChange }
                        amount={ toAmount }
                    />
                </div>
                <div className='main-frame-row'>
                    {/* Conversion result */ }
                    <ConversionResult />
                    <div className='currency-rates'>
                        <CurrencyRates />
                        <CurrencyRates />
                    </div>
                </div>
                <Disclaimer />
            </div>
        </div>
    )
}

export default MainFrame;