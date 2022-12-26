import React from 'react'
import { validateNumber } from './utils/utils'

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
            <p className='conversion-result__base conversion-result__item'>{ validateNumber(fromAmount) } { fromCurrency } =</p>
            <p className='conversion-result__final conversion-result__item' onClick={ copyText }>
                { validateNumber(toAmount) } { toCurrency }</p>
            <p className='conversion-result__disclaimer'>Click on the number to copy</p>
        </div>

    )
};