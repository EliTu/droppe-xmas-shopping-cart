import { SectionContainer, SectionHeaderContainer, SectionHeader } from '../ShopPage.styled';
import { SelectedProductsContainer } from './ShoppingCart.styled';

function ShoppingCart() {
	return (
		<SectionContainer $height={70}>
			<SectionHeaderContainer>
				<SectionHeader>Your shopping cart:</SectionHeader>
			</SectionHeaderContainer>
			<SelectedProductsContainer></SelectedProductsContainer>
		</SectionContainer>
	);
}

export default ShoppingCart;
