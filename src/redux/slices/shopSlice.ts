import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShopInitialState, WishListUser } from './types';
import { getCartsAsync } from './thunks';

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
	reducers: {},
	extraReducers: ({ addCase }) => {
		addCase(getCartsAsync.pending, state => {
			return { ...state, isLoading: true };
		});
		addCase(getCartsAsync.fulfilled, (state, action) => {
			return { ...state, isLoading: false };
		});
	},
});

// Action creators are generated for each case reducer function
export const {} = shopSlice.actions;

export default shopSlice.reducer;
