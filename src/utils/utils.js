export function validateNumber(number) {
    if (number == null || number == undefined || isNaN(number)) {
        return 0
    }
    return number
};

export function fetchRates(url, baseCurrency, setRateBaseCurrency) {
    fetch(`${url}?base=${baseCurrency}`)
        .then(res => res.json())
        .then(data => setRateBaseCurrency(data.rates[ 'UAH' ]))
};
