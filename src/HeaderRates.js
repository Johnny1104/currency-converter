import React from 'react'
import { validateNumber } from './utils/utils'

export default function HeaderRates(props) {
    const {
        rateUsd,
        rateEur,
    } = props;


    return (
        <h2 className='header-text sub-header-text'>
            1 USD = { validateNumber(rateUsd) } UAH | 1 EUR = { validateNumber(rateEur) } UAH
        </h2>
    )
}
