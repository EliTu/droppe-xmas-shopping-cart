/**
 * This function formats the an amount to a currency styled value, with the appropriate currency symbol, according to a given locale (defaults to Finnish locale)
 * @param amount the amount to format
 * @param locale a locale string (i.e. 'en-us', 'fi-FI')
 * @returns the formatted amount as a string
 * @example
 * formatPrice(123.20) -> '123,20 €'
 * formatPrice(500, 'en-us') -> '$500.00'
 */
function formatPrice(amount: number, locale = 'fi-FI') {
	return new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR' }).format(amount);
}

export default formatPrice;
