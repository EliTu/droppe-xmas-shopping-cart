import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { calculateDiscount, formatPrice } from '../../../../utils';
import { Button, ButtonTypes } from '../../../ui/Button';
import {
	CartControlsContainer,
	CheckoutContainer,
	PriceContainer,
	ShoppingIcon,
	TotalDiscountSpan,
	TotalPriceSpan,
} from './CartControls.styled';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

type PriceCalculationRecord = Record<'totalPrice' | 'discountAmount', number>;

function CartControls() {
	const { selectedProductsRecord } = useSelector(({ shop }: RootState) => shop);
	const selectedProductsValues = Object.values(selectedProductsRecord);
	const { totalPrice, discountAmount } = useMemo(
		() =>
			selectedProductsValues.reduce<PriceCalculationRecord>(
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
			),
		[selectedProductsRecord]
	);

	return (
		<CartControlsContainer>
			<CheckoutContainer>
				<PriceContainer>
					<TotalPriceSpan>Total: {formatPrice(totalPrice)}</TotalPriceSpan>
					<TotalDiscountSpan>You saved: {formatPrice(discountAmount)}</TotalDiscountSpan>
				</PriceContainer>
				<Button disabled={!selectedProductsValues.length} fontSize={16} type={ButtonTypes.CONFIRM}>
					Checkout {<ShoppingIcon icon={faShoppingBag} />}
				</Button>
			</CheckoutContainer>
		</CartControlsContainer>
	);
}

export default CartControls;
