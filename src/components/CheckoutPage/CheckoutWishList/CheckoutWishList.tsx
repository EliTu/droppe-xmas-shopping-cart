import { CheckoutCarts, WishListUser } from '../../../redux/slices/types';
import {
	HeaderTitleArea,
	ProductsContainer,
	SingleWishListContainer,
	WishListHeader,
	WishListTitle,
} from '../../ShopPage/WishLists/SingleWishList/SingleWishList.styled';
import { CheckoutProduct } from './CheckoutProduct';
import { AcceptanceCategoryHeader, ProductsSummarySpan } from './CheckoutWishList.styled';

interface CheckoutWishListProps {
	cartData: CheckoutCarts;
	wishListOwner: WishListUser;
}

function CheckoutWishList({ cartData, wishListOwner }: CheckoutWishListProps) {
	const checkIfFavorite = (productId: number) => productId === wishListOwner.favoriteProductId;
	const { acceptedProducts, disregardedProducts } = cartData;
	const totalNumberOfProducts = [...acceptedProducts, ...disregardedProducts].length;

	return (
		<SingleWishListContainer>
			<WishListHeader>
				<HeaderTitleArea>
					<WishListTitle>{`${wishListOwner.name}'s Wish List`}</WishListTitle>
					<ProductsSummarySpan>
						Total of {totalNumberOfProducts} products: {acceptedProducts.length} Accepted, {disregardedProducts.length}{' '}
						Rejected
					</ProductsSummarySpan>
				</HeaderTitleArea>
			</WishListHeader>
			<ProductsContainer>
				{Boolean(acceptedProducts.length) && (
					<>
						<AcceptanceCategoryHeader $isSelected>Accepted products:</AcceptanceCategoryHeader>
						{acceptedProducts.map(acceptedProduct => (
							<CheckoutProduct
								key={`${acceptedProduct.productData.id}_${cartData.id}`}
								productData={acceptedProduct.productData}
								isFavorite={checkIfFavorite(acceptedProduct.productData.id)}
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
							/>
						))}
					</>
				)}
			</ProductsContainer>
		</SingleWishListContainer>
	);
}

export default CheckoutWishList;
