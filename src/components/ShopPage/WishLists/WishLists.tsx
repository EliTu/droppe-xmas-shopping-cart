import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { WishListsContainer } from './WishLists.styled';

function WishLists() {
	const { wishListUsers, carts } = useSelector(({ shop }: RootState) => shop);
	return <WishListsContainer></WishListsContainer>;
}

export default WishLists;
