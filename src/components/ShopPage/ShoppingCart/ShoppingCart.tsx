import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { clearAllSelectedProducts } from '../../../redux/slices/shopSlice';
import { RootState, useAppDispatch } from '../../../redux/store';
import { BareButton } from '../../ui/BareButton';
import { SectionContainer, SectionHeaderContainer, SectionHeader } from '../ShopPage.styled';
import { CartControls } from './CartControls';
import { SelectedProduct } from './SelectedProduct';
import { NoProductsAvailable, SelectedProductsContainer } from './ShoppingCart.styled';

function ShoppingCart() {
	const { selectedProductsRecord } = useSelector(({ shop }: RootState) => shop);
	const dispatch = useAppDispatch();

	const areProductsAvailable = useMemo(
		() => Object.values(selectedProductsRecord).length > 0,
		[selectedProductsRecord]
	);

	const onClearClick = () => dispatch(clearAllSelectedProducts());

	return (
		<SectionContainer>
			<SectionHeaderContainer>
				<SectionHeader>Your shopping cart:</SectionHeader>
				<BareButton onClick={onClearClick}>Clear cart</BareButton>
			</SectionHeaderContainer>
			<SelectedProductsContainer>
				{areProductsAvailable ? (
					Object.values(selectedProductsRecord).map(
						({ amount, availableInCarts, originCartIdsList: originCartIds, productData }) => {
							return (
								<SelectedProduct
									key={productData.id}
									productData={productData}
									availableInCarts={availableInCarts}
									selectionAmount={amount}
									originCartIds={originCartIds}
								/>
							);
						}
					)
				) : (
					<NoProductsAvailable>
						<h3>You currently have no products selected</h3>
						<span>Start selecting products from the Wish List and/or from the Presets at the bottom</span>
					</NoProductsAvailable>
				)}
			</SelectedProductsContainer>
			<CartControls></CartControls>
		</SectionContainer>
	);
}

export default ShoppingCart;
