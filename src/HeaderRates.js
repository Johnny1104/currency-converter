import React from 'react'

export default function HeaderRates(props) {
    const {
        rateUsd,
        rateEur,
    } = props;

    return (
        <h2 className='header-text sub-header-text'>
            1 USD = { rateUsd } UAH | 1 EUR = { rateEur } UAH
        </h2>
    )
}
