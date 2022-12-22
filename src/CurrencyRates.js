import React from 'react'

export default function CurrencyRates(props) {
    const {
        rate,
        amount,
        fromCurrency,
        toCurrency,
    } = props;
    return (
        <p className='currency-rates__item'>
            { amount } { fromCurrency } = { rate } { toCurrency }
        </p>
    )
}
