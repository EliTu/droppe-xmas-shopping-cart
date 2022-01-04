import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShopInitialState, WishListUser } from './types';

const WISH_LIST_USERS: ReadonlyArray<WishListUser> = [
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

const initialState: ShopInitialState = {
	wishListUsers: WISH_LIST_USERS,
	carts: [],
	acceptedCarts: [],
	disregardedCarts: [],
	products: [],
	isLoading: false,
	error: null,
};

export const shopSlice = createSlice({
	name: 'shop',
	initialState: initialState,
	reducers: {
		getCarts: state => {},
		populateCartProducts: state => {},
	},
});

// Action creators are generated for each case reducer function
export const {} = shopSlice.actions;

export default shopSlice.reducer;
