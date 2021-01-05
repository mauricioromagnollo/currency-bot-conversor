import { getFormattedCurrency } from './get-formatted-currency';

describe('getFormattedCurrency', () => {
  it('should return the currency in Real formatted', () => {
    const value = 20.0;
    const valueFormatted = getFormattedCurrency(value);
    expect(valueFormatted).toHaveLength(8);
  });
});
