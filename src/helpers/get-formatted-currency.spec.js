const getFormattedCurrency = require('./get-formatted-currency');

describe('getFormattedCurrency', () => {
  it('should return the currency in Real format', () => {
    const value = 20.0;
    const valueFormatted = getFormattedCurrency(value, 'real');
    expect(valueFormatted).toHaveLength(8);
  });

  it('should return the currency in Dollar format', () => {
    const value = 20.0;
    const valueFormatted = getFormattedCurrency(value, 'dollar');
    expect(valueFormatted).toHaveLength(6);
  });

  it('should return the currency in Eur format', () => {
    const value = 20.0;
    const valueFormatted = getFormattedCurrency(value, 'eur');
    expect(valueFormatted).toHaveLength(7);
  });

  it('should not be able to pass an argument other than a number', () => {
    const value = '20.0';
    const valueFormatted = getFormattedCurrency(value, 'dollar');
    expect(valueFormatted).toBe(null);
  });
});
