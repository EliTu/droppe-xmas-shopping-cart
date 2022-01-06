import React from 'react';
import format from 'date-fns/format';
import { CartWithPopulatedProducts, WishListUser } from '../../../../redux/slices/types';
import { SingleWishListContainer, WishListDate, WishListHeader, WishListTitle } from './SingleWishList.styled';

interface WishListProps {
	cartData: CartWithPopulatedProducts;
	WishListOwner: WishListUser;
}

function SingleWishList({ WishListOwner, cartData }: WishListProps) {
	console.log({ cartData, WishListOwner });
	const title = `${WishListOwner.name}'s Wish List`;
	const formattedDate = format(new Date(cartData.date), 'MM/dd/yyyy');
	return (
		<SingleWishListContainer>
			<WishListHeader>
				<WishListTitle>{title}</WishListTitle>
				<WishListDate>Created at: {formattedDate}</WishListDate>
			</WishListHeader>
		</SingleWishListContainer>
	);
}

export default SingleWishList;
