import React from 'react'

export default function ConversionResult(props) {
    const {
        fromAmount,
        toAmount,
        fromCurrency,
        toCurrency,
    } = props;

    function copyText() {
        navigator.clipboard.writeText(toAmount)
    };

    return (
        <div className='conversion-result'>
            <p className='conversion-result__base conversion-result__item'>{ isNaN(fromAmount) ? 0 : fromAmount } { fromCurrency } =</p>
            <p className='conversion-result__final conversion-result__item' onClick={ copyText }>
                { isNaN(toAmount) ? 0 : toAmount } { toCurrency }</p>
            <p className='conversion-result__disclaimer'>Click on the number to copy</p>
        </div>

    )
};