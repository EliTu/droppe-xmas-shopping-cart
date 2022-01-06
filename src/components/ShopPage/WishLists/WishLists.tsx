import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import SingleWishList from './SingleWishList/SingleWishList';
import { WishListsContainer, WishListsSectionContainer } from './WishLists.styled';

function WishLists() {
	const { wishListUsers, carts } = useSelector(({ shop }: RootState) => shop);
	const numberOfCarts = carts.length;

	const computedTitle = useMemo(() => {
		if (numberOfCarts === 0) return 'No Wish Lists available currently';
		if (numberOfCarts === 1) return 'There is one Wish List available';
		return `There are ${numberOfCarts} Wish Lists available`;
	}, [numberOfCarts]);

	return (
		<WishListsSectionContainer>
			<h3>{computedTitle}</h3>
			<WishListsContainer>
				{carts.map(cartData => {
					const wishListOwner = wishListUsers.find(user => user.associatedCartId === cartData.id)!;
					return <SingleWishList key={cartData.id} cartData={cartData} WishListOwner={wishListOwner} />;
				})}
			</WishListsContainer>
		</WishListsSectionContainer>
	);
}

export default WishLists;
