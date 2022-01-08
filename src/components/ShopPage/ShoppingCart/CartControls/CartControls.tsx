import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { calculateDiscount, formatPrice } from '../../../../utils';
import { Button, ButtonTypes } from '../../../ui/Button';
import {
	CartControlsContainer,
	CheckoutContainer,
	ControlsContainer,
	PriceContainer,
	ShoppingIcon,
	TotalDiscountSpan,
	TotalPriceSpan,
} from './CartControls.styled';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { TargetProductPayload } from '../../../../redux/slices/types';
import { addToSelectedProducts } from '../../../../redux/slices/shopSlice';

type PriceCalculationRecord = Record<'totalPrice' | 'discountAmount', number>;

interface ControlButton {
	name: string;
	label: string;
	onClick: (data: any) => void;
}

function CartControls() {
	const { selectedProductsRecord, carts, wishListUsers } = useSelector(({ shop }: RootState) => shop);
	const dispatch = useDispatch();

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

	const favorites = carts.reduce<TargetProductPayload[]>((a, c) => {
		const products = c.products;
		const associatedUser = wishListUsers.find(user => user.associatedCartId === c.id)!;
		const favorite = products.find(product => product.id === associatedUser.favoriteProductId)!;

		a.push({ cartId: c.id, productId: favorite.id });
		return a;
	}, []);

	const cheapest = carts.reduce<TargetProductPayload[]>((a, c) => {
		const products = c.products;
		var cheapest = products.reduce((a, b) => (a.price < b.price ? a : b));

		a.push({ cartId: c.id, productId: cheapest.id });
		return a;
	}, []);

	const allProducts = carts.reduce<TargetProductPayload[]>((a, c) => {
		const products = c.products;

		for (const product of products) {
			a.push({ cartId: c.id, productId: product.id });
		}
		return a;
	}, []);

	const controlButtons: ControlButton[] = useMemo(
		() => [
			{
				name: 'allFavorites',
				label: 'Select all favorite products',
				onClick: () => dispatch(addToSelectedProducts(favorites)),
			},
			{
				name: 'allCheapest',
				label: 'Select cheapest products',
				onClick: () => dispatch(addToSelectedProducts(cheapest)),
			},
			{
				name: 'allProducts',
				label: 'Select all products',
				onClick: () => dispatch(addToSelectedProducts(allProducts)),
			},
		],
		[]
	);

	return (
		<CartControlsContainer>
			<ControlsContainer $numberOfFrs={controlButtons.length}>
				{controlButtons.map(({ name, label, onClick }) => (
					<Button type={ButtonTypes.CONFIRM} key={name} onClick={onClick}>
						{label}
					</Button>
				))}
			</ControlsContainer>
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
