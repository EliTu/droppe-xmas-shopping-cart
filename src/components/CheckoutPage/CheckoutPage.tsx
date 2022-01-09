import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFullPriceDetails } from '../../hooks';
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
	EmptyPageContainer,
	GoBackClicker,
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

function CheckoutPage() {
	const { checkoutCarts, wishListUsers, selectedProductsRecord } = useSelector(({ shop }: RootState) => shop);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { discountAmount, totalPrice } = useFullPriceDetails();

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

	const onCancelClick = () => navigate('/');
	const onConfirmClick = () => {
		navigate('/');
		dispatch(updateCartsAsync());
	};

	if (!checkoutCarts.length || !Object.values(selectedProductsRecord).length) {
		return (
			<EmptyPageContainer>
				<h1>Nothing to checkout currently!</h1>
				<span>
					<GoBackClicker onClick={onCancelClick}>Go back</GoBackClicker> to the shop, select some items and click on
					checkout in order to proceed
				</span>
			</EmptyPageContainer>
		);
	}

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
