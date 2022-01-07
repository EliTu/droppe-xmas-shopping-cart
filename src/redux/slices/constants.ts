import { WishListUser } from './types';

export const BASE_URL = 'https://fakestoreapi.com';

export const WISH_LIST_USERS: ReadonlyArray<WishListUser> = [
	{
		name: 'Harry',
		associatedCartId: 1,
		favoriteProductId: 3,
	},
	{
		name: 'Ron',
		associatedCartId: 3,
		favoriteProductId: 1,
	},
	{
		name: 'Hermione',
		associatedCartId: 2,
		favoriteProductId: 5,
	},
	{
		name: 'Ginny',
		associatedCartId: 4,
		favoriteProductId: 1,
	},
	{
		name: 'Luna',
		associatedCartId: 6,
		favoriteProductId: 12,
	},
];
