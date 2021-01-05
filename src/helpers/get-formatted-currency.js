const typeOfCurrency = {
  real: ['pt-BR', 'BRL'],
  dollar: ['en-US', 'USD'],
  eur: ['de-DE', 'EUR']
}

function getFormattedCurrency(value, currencyType) {
  if (typeof value === 'number' && typeof currencyType === 'string') {

    const [locale, currency] = typeOfCurrency[currencyType];

    const currencyStyle = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    });

    return currencyStyle.format(value);
  } else {
    return null;
  }
}

module.exports = getFormattedCurrency;
