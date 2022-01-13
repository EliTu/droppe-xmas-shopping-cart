import { ShopPageContainer } from './ShopPage.styled';
import { ShoppingCart } from './ShoppingCart';
import { WishLists } from './WishLists';

function ShopPage() {
	return (
		<ShopPageContainer>
			<WishLists />
			<ShoppingCart />
		</ShopPageContainer>
	);
}

export default ShopPage;
