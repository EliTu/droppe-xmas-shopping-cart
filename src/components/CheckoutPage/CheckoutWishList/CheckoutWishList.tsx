import { CheckoutCarts, WishListUser } from '../../../redux/slices/types';
import {
	HeaderTitleArea,
	ProductsContainer,
	SingleWishListContainer,
	WishListHeader,
	WishListTitle,
} from '../../ShopPage/WishLists/SingleWishList/SingleWishList.styled';
import { CheckoutProduct } from './CheckoutProduct';
import { AcceptanceCategoryHeader } from './CheckoutWishList.styled';

interface CheckoutWishListProps {
	cartData: CheckoutCarts;
	wishListOwner: WishListUser;
}

function CheckoutWishList({ cartData, wishListOwner }: CheckoutWishListProps) {
	const checkIfFavorite = (productId: number) => productId === wishListOwner.favoriteProductId;
	const { acceptedProducts, disregardedProducts } = cartData;

	return (
		<SingleWishListContainer>
			<WishListHeader>
				<HeaderTitleArea>
					<WishListTitle>{`${wishListOwner.name}'s Wish List`}</WishListTitle>
				</HeaderTitleArea>
			</WishListHeader>
			<ProductsContainer>
				{Boolean(acceptedProducts.length) && (
					<>
						<AcceptanceCategoryHeader>Accepted products:</AcceptanceCategoryHeader>
						{acceptedProducts.map(acceptedProduct => (
							<CheckoutProduct
								key={`${acceptedProduct.productData.id}_${cartData.id}`}
								selectionAmount={acceptedProduct.amount}
								productData={acceptedProduct.productData}
								isFavorite={checkIfFavorite(acceptedProduct.productData.id)}
								isSelected
							/>
						))}
					</>
				)}
				{Boolean(disregardedProducts.length) && (
					<>
						<AcceptanceCategoryHeader>Rejected products:</AcceptanceCategoryHeader>
						{disregardedProducts.map(acceptedProduct => (
							<CheckoutProduct
								key={`${acceptedProduct.productData.id}_${cartData.id}`}
								productData={acceptedProduct.productData}
								isFavorite={checkIfFavorite(acceptedProduct.productData.id)}
								selectionAmount={acceptedProduct.amount}
							/>
						))}
					</>
				)}
			</ProductsContainer>
		</SingleWishListContainer>
	);
}

export default CheckoutWishList;
