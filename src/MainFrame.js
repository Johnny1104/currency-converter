import React, { useState, useEffect } from 'react';
import ConversionResult from './ConversionResult.js';
import CurrencyPicker from './CurrencyPicker.js';
import CurrencyRates from './CurrencyRates.js';
import Disclaimer from './Disclaimer.js';
import ReverseButton from './ReverseButton.js';

function MainFrame(props) {
    const {
        url
    } = props;

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
        fetch(url)
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
            fetch(`${url}?base=${fromCurrency}&symbols=${toCurrency}`)
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

    function swapCurrencies() {
        let temp = fromCurrency

        if (!amountInFromCurrency) {
            setAmount(fromAmount)
        } else {
            setAmount(toAmount)
        }
        setFromCurrency(toCurrency)
        setToCurrency(temp)
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
                        title='From'
                    />
                    <ReverseButton
                        reverseFn={ swapCurrencies }
                    />
                    <CurrencyPicker
                        currencyOptions={ currencyOptions }
                        selectedCurrency={ toCurrency }
                        onChangeCurrency={ e => setToCurrency(e.target.value) }
                        onChangeAmount={ handleToAmountChange }
                        amount={ toAmount }
                        title='To'
                    />
                </div>
                <div className='main-frame-row'>
                    <ConversionResult
                        fromCurrency={ fromCurrency }
                        fromAmount={ Number(fromAmount).toFixed(2) }
                        toCurrency={ toCurrency }
                        toAmount={ Number(toAmount).toFixed(2) }
                    />
                    <div className='currency-rates'>
                        <CurrencyRates
                            rate={ Number(exchangeRate).toFixed(6) }
                            amount={ 1 }
                            fromCurrency={ fromCurrency }
                            toCurrency={ toCurrency }
                        />
                        <CurrencyRates
                            rate={ Number(1 / exchangeRate).toFixed(6) }
                            amount={ 1 }
                            fromCurrency={ toCurrency }
                            toCurrency={ fromCurrency }
                        />
                    </div>
                </div>
                <Disclaimer />
            </div>
        </div>
    )
}

export default MainFrame;