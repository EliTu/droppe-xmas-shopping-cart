import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShopInitialState, Status, WishListUser } from './types';
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
	relevantProducts: [],
	status: Status.IDLE,
	errorMessage: undefined,
};

export const shopSlice = createSlice({
	name: 'shop',
	initialState: initialState,
	reducers: {
		setRelevantProducts: (state, { payload }) => {
			return { ...state, relevantProducts: payload };
		},
	},
	extraReducers: ({ addCase }) => {
		addCase(getCartsAsync.pending, state => {
			return { ...state, status: Status.LOADING };
		});
		addCase(getCartsAsync.fulfilled, (state, { payload }) => {
			return {
				...state,
				status: Status.IDLE,
				carts: payload ?? [],
			};
		});
		addCase(getCartsAsync.rejected, (state, { payload }) => {
			return {
				...state,
				status: Status.ERROR,
				errorMessage: (payload as Error)?.message,
			};
		});
	},
});

// Action creators are generated for each case reducer function
export const { setRelevantProducts } = shopSlice.actions;

export default shopSlice.reducer;
