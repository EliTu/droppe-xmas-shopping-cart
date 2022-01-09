import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateCartsAsync } from '../../redux/slices/thunks';
import { RootState, useAppDispatch } from '../../redux/store';
import { calculateDiscount, formatPrice } from '../../utils';
import { Button, ButtonTypes } from '../ui/Button';
import {
	CheckoutButtonsContainer,
	CheckoutPageContainer,
	CheckoutSummaryContainer,
	CheckoutSummaryDataContainer,
	CheckoutSummaryPriceDataContainer,
	CheckoutSummaryTitle,
	CheckoutWishListsContainer,
	PriceLabel,
	SummaryItemLabel,
	SummaryItemRow,
	TotalPriceLabel,
} from './CheckoutPage.styled';
import { CheckoutWishList } from './CheckoutWishList';

interface SummaryDetailItem {
	label: string;
	value: string | number;
}

type PriceCalculationRecord = Record<'totalPrice' | 'discountAmount', number>;

function CheckoutPage() {
	const { checkoutCarts, wishListUsers, selectedProductsRecord } = useSelector(({ shop }: RootState) => shop);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const summaryDetails: SummaryDetailItem[] = useMemo(
		() => [
			{ label: 'Number of wish lists', value: wishListUsers.length },
			{
				label: 'Number of accepted products',
				value: checkoutCarts.reduce((a, c) => (a += c.acceptedProducts.length), 0),
			},
			{
				label: 'Number of rejected products',
				value: checkoutCarts.reduce((a, c) => (a += c.disregardedProducts.length), 0),
			},
		],
		[wishListUsers, checkoutCarts]
	);

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

	const onCancelClick = () => navigate('/');
	const onConfirmClick = () => {
		navigate('/');
		dispatch(updateCartsAsync());
	};

	return (
		<CheckoutPageContainer>
			<CheckoutWishListsContainer>
				{checkoutCarts.map(cart => {
					const wishListOwner = wishListUsers.find(user => user.associatedCartId === cart.id)!;
					return <CheckoutWishList cartData={cart} wishListOwner={wishListOwner} />;
				})}
			</CheckoutWishListsContainer>
			<CheckoutSummaryContainer>
				<CheckoutSummaryTitle>Your Checkout Summary:</CheckoutSummaryTitle>
				<CheckoutSummaryDataContainer>
					{summaryDetails.map(({ label, value }) => (
						<SummaryItemRow>
							<SummaryItemLabel>{label}:</SummaryItemLabel> {value}
						</SummaryItemRow>
					))}
				</CheckoutSummaryDataContainer>
				<CheckoutSummaryPriceDataContainer>
					<PriceLabel>Price before discount: {formatPrice(totalPrice + discountAmount)}</PriceLabel>
					<PriceLabel>Discount: {formatPrice(discountAmount)}</PriceLabel>
					<TotalPriceLabel>Total: {formatPrice(totalPrice)}</TotalPriceLabel>
				</CheckoutSummaryPriceDataContainer>
				<CheckoutButtonsContainer>
					<Button onClick={onCancelClick} fontSize={18}>
						Go back to shop
					</Button>
					<Button onClick={onConfirmClick} fontSize={25} type={ButtonTypes.CONFIRM}>
						Confirm
					</Button>
				</CheckoutButtonsContainer>
			</CheckoutSummaryContainer>
		</CheckoutPageContainer>
	);
}

export default CheckoutPage;
