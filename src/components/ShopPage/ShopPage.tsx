import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ShopPageContainer } from './ShopPage.styled';
import { WishLists } from './WishLists';

function ShopPage() {
	const { status } = useSelector(({ shop }: RootState) => shop);
	return (
		<ShopPageContainer>
			<WishLists />
		</ShopPageContainer>
	);
}

export default ShopPage;
