import { useMemo } from 'react';
import { calculateDiscount } from '../utils';
import useShopStore from './useShopStore';

type PriceCalculationRecord = Record<'totalPrice' | 'discountAmount', number>;

function useFullPriceDetails() {
	const { selectedProductsRecord } = useShopStore();
	const selectedProductsValues = Object.values(selectedProductsRecord);

	const { totalPrice, discountAmount } = selectedProductsValues.reduce<PriceCalculationRecord>(
		(acc, currentProduct) => {
			if (currentProduct.amount <= 1) {
				return { ...acc, totalPrice: acc.totalPrice + currentProduct.productData.price };
			}

			const priceBeforeDiscount = currentProduct.productData.price * currentProduct.amount;
			const discountPercentage = currentProduct.amount * 10;
			const { amountAfterDiscount, amountReduced } = calculateDiscount(priceBeforeDiscount, discountPercentage);

			return {
				totalPrice: amountAfterDiscount,
				discountAmount: acc.discountAmount + amountReduced,
			};
		},
		{ totalPrice: 0, discountAmount: 0 }
	);

	return useMemo(
		() => ({
			totalPrice,
			discountAmount,
		}),
		[totalPrice, discountAmount]
	);
}

export default useFullPriceDetails;
