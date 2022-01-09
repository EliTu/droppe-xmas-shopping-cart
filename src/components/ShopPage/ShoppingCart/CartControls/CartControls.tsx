import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../redux/store';
import { formatPrice, getPresetsData, PresetName } from '../../../../utils';
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
import {
	addToSelectedProducts,
	aggregateCheckoutCarts,
	clearAllSelectedProducts,
} from '../../../../redux/slices/shopSlice';
import { useFullPriceDetails } from '../../../../hooks';

interface ControlButton {
	name: PresetName;
	label: string;
	presetData: TargetProductPayload[];
}

function CartControls() {
	const { selectedProductsRecord, carts, wishListUsers } = useSelector(({ shop }: RootState) => shop);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { discountAmount, totalPrice } = useFullPriceDetails();

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

	const onCheckoutClick = () => {
		dispatch(aggregateCheckoutCarts());
		navigate('/checkout', { replace: true });
	};

	return (
		<CartControlsContainer>
			<ControlsContainer>
				<ControlsLabel>Preset selection options:</ControlsLabel>
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
					disabled={!Object.values(selectedProductsRecord).length}
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
