import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { CheckoutPageContainer } from './CheckoutPage.styled';
import { CheckoutWishList } from './CheckoutWishList';

function CheckoutPage() {
	const { checkoutCarts, wishListUsers } = useSelector(({ shop }: RootState) => shop);
	return (
		<CheckoutPageContainer>
			{checkoutCarts.map(cart => {
				const wishListOwner = wishListUsers.find(user => user.associatedCartId === cart.id)!;
				return <CheckoutWishList cartData={cart} wishListOwner={wishListOwner} />;
			})}
		</CheckoutPageContainer>
	);
}

export default CheckoutPage;
