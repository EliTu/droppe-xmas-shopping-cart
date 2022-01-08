import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { calculateDiscount, formatPrice, getPresetsData, PresetName } from '../../../../utils';
import { Button, ButtonTypes } from '../../../ui/Button';
import {
	CartControlsContainer,
	CheckoutContainer,
	ControlsContainer,
	ControlsLabel,
	PresetButtonsContainer,
	PriceContainer,
	ShoppingIcon,
	TotalDiscountSpan,
	TotalPriceSpan,
} from './CartControls.styled';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { TargetProductPayload } from '../../../../redux/slices/types';
import { addToSelectedProducts, clearAllSelectedProducts } from '../../../../redux/slices/shopSlice';

type PriceCalculationRecord = Record<'totalPrice' | 'discountAmount', number>;
interface ControlButton {
	name: PresetName;
	label: string;
	presetData: TargetProductPayload[];
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

	const presetsControlButtons: ControlButton[] = useMemo(
		() => [
			{
				name: PresetName.FAVORITES,
				label: 'Select all favorite products',
				presetData: getPresetsData(PresetName.FAVORITES, carts, wishListUsers),
			},
			{
				name: PresetName.CHEAPEST,
				label: 'Select cheapest products',
				presetData: getPresetsData(PresetName.CHEAPEST, carts, wishListUsers),
			},
			{
				name: PresetName.ALL_PRODUCTS,
				label: 'Select all products',
				presetData: getPresetsData(PresetName.ALL_PRODUCTS, carts, wishListUsers),
			},
		],
		[]
	);

	const onPresetButtonClick = useCallback((presetData: TargetProductPayload[]) => {
		dispatch(clearAllSelectedProducts());
		dispatch(addToSelectedProducts(presetData));
	}, []);

	return (
		<CartControlsContainer>
			<ControlsContainer>
				<ControlsLabel>Presets available:</ControlsLabel>
				<PresetButtonsContainer $numberOfFrs={presetsControlButtons.length}>
					{presetsControlButtons.map(({ name, label, presetData }) => (
						<Button type={ButtonTypes.CONFIRM} key={name} onClick={() => onPresetButtonClick(presetData)}>
							{label}
						</Button>
					))}
				</PresetButtonsContainer>
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
