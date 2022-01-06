import React, { useMemo } from 'react';
import format from 'date-fns/format';
import { CartWithPopulatedProducts, WishListUser } from '../../../../redux/slices/types';
import formatPrice from '../../../../utils/formatPrice';
import WishListProduct from './WishListProduct/Product';
import {
	FooterDataItem,
	ProductsContainer,
	SingleWishListContainer,
	WishListDate,
	WishListFooter,
	WishListHeader,
	WishListTitle,
} from './SingleWishList.styled';

interface WishListProps {
	cartData: CartWithPopulatedProducts;
	WishListOwner: WishListUser;
}

function SingleWishList({ WishListOwner, cartData }: WishListProps) {
	console.log({ cartData, WishListOwner });
	const { date, products } = cartData;

	const title = `${WishListOwner.name}'s Wish List`;
	const formattedDate = format(new Date(date), 'MM/dd/yyyy');
	const totalListProductsPrice = products.reduce((acc, currentProduct) => acc + currentProduct.price, 0);

	const footerDataItems = useMemo(
		() => [
			{ label: 'Number of products in cart:', value: products.length },
			{ label: 'Total cart price:', value: formatPrice(totalListProductsPrice) },
		],
		[products, totalListProductsPrice]
	);

	return (
		<SingleWishListContainer>
			<WishListHeader>
				<WishListTitle>{title}</WishListTitle>
				<WishListDate>Created at: {formattedDate}</WishListDate>
			</WishListHeader>
			<ProductsContainer>
				{products.map(product => (
					<WishListProduct productData={product} />
				))}
			</ProductsContainer>
			<WishListFooter>
				{footerDataItems.map(({ label, value }) => (
					<FooterDataItem>
						{label} {value}
					</FooterDataItem>
				))}
			</WishListFooter>
		</SingleWishListContainer>
	);
}

export default SingleWishList;
