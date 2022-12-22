import React from 'react'

function CurrencyPicker(props) {
    const {
        currencyOptions,
        selectedCurrency
    } = props;
    return (
        <div className='currency-picker'>
            <label htmlFor='fromCurrency' className='currency-picker__label'>From</label>
            <div className='input-wrapper'>
                <input type='number' name='fromCurrency' className='currency-picker__input' min='0' placeholder="0"></input>
                <div className='currency-picker__select'>
                    <select value={ selectedCurrency }>
                        { currencyOptions.map(option => (
                            <option value={ option }>{ option }</option>
                        )) };
                    </select>
                </div>
            </div>
        </div>
    )
}

export default CurrencyPicker;