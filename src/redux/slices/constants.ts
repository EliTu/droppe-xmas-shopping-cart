import { WishListUser } from './types';

export const BASE_URL = 'https://fakestoreapi.com';

export const WISH_LIST_USERS: ReadonlyArray<WishListUser> = [
	{
		name: 'Harry',
		associatedCartId: 1,
	},
	{
		name: 'Ron',
		associatedCartId: 2,
	},
	{
		name: 'Hermione',
		associatedCartId: 3,
	},
	{
		name: 'Ginny',
		associatedCartId: 4,
	},
	{
		name: 'Luna',
		associatedCartId: 5,
	},
];
