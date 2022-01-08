import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { SectionContainer, SectionHeaderContainer, SectionHeader } from '../ShopPage.styled';
import { CartControls } from './CartControls';
import { SelectedProduct } from './SelectedProduct';
import { SelectedProductsContainer } from './ShoppingCart.styled';

function ShoppingCart() {
	const { selectedProductsRecord } = useSelector(({ shop }: RootState) => shop);
	return (
		<SectionContainer>
			<SectionHeaderContainer>
				<SectionHeader>Your shopping cart:</SectionHeader>
			</SectionHeaderContainer>
			<SelectedProductsContainer>
				{Object.values(selectedProductsRecord).map(
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
				)}
			</SelectedProductsContainer>
			<CartControls></CartControls>
		</SectionContainer>
	);
}

export default ShoppingCart;
