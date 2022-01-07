import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ShopPageContainer } from './ShopPage.styled';
import { ShoppingCart } from './ShoppingCart';
import { WishLists } from './WishLists';

function ShopPage() {
	const { status } = useSelector(({ shop }: RootState) => shop);
	return (
		<ShopPageContainer>
			<WishLists />
			<ShoppingCart />
		</ShopPageContainer>
	);
}

export default ShopPage;
