/**
 * Calculate an amount by the discount %
 * @param amount The original amount
 * @param discountPercentageInteger A percentage that is represented by an integer
 * @returns discountAmount: the amount after the discount reduction, amountAfterDiscount: the amount reduced.
 * @example calculateDiscount(500, 10) -> {amountAfterDiscount: 450, discountAmount: 50}
 */
function calculateDiscount(amount: number, discountPercentageInteger: number) {
	const percentage = discountPercentageInteger >= 50 ? 50 : discountPercentageInteger; // keep the percentage on sane levels :)
	const amountReduced = amount * (percentage / 100);
	const amountAfterDiscount = amount - amountReduced;

	return {
		amountReduced,
		amountAfterDiscount,
	};
}

export default calculateDiscount;
