import { SectionContainer, SectionHeaderContainer, SectionHeader } from '../ShopPage.styled';

function ShoppingCart() {
	return (
		<SectionContainer $height={70}>
			<SectionHeaderContainer>
				<SectionHeader>Your shopping cart:</SectionHeader>
			</SectionHeaderContainer>
		</SectionContainer>
	);
}

export default ShoppingCart;
