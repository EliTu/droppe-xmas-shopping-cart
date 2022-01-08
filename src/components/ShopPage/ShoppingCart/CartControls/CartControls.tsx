import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../redux/store';
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
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

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

	const predefinedGetPresetDataFn = (presetName: PresetName) => getPresetsData(presetName, carts, wishListUsers);

	const presetsControlButtons: ControlButton[] = useMemo(
		() => [
			{
				name: PresetName.FAVORITES,
				label: 'Select all favorite products',
				presetData: predefinedGetPresetDataFn(PresetName.FAVORITES),
			},
			{
				name: PresetName.CHEAPEST,
				label: 'Select cheapest products',
				presetData: predefinedGetPresetDataFn(PresetName.CHEAPEST),
			},
			{
				name: PresetName.ALL_PRODUCTS,
				label: 'Select all products',
				presetData: predefinedGetPresetDataFn(PresetName.ALL_PRODUCTS),
			},
		],
		[]
	);

	const onPresetButtonClick = useCallback((presetData: TargetProductPayload[]) => {
		dispatch(clearAllSelectedProducts()); // first remove all previous cart items
		dispatch(addToSelectedProducts(presetData)); // pass the preset data
	}, []);

	const onCheckoutClick = () => navigate('/checkout', { replace: true });

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
				<Button
					disabled={!selectedProductsValues.length}
					fontSize={16}
					type={ButtonTypes.CONFIRM}
					onClick={onCheckoutClick}
				>
					Checkout {<ShoppingIcon icon={faShoppingBag} />}
				</Button>
			</CheckoutContainer>
		</CartControlsContainer>
	);
}

export default CartControls;
