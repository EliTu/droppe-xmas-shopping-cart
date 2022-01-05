import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartWithPopulatedProducts, Product, ShopInitialState, Status } from './types';
import { getCartsAsync } from './thunks';
import { WISH_LIST_USERS } from './constants';

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
	// non-async actions
	reducers: {
		setRelevantProducts: (state, { payload }: PayloadAction<Product[]>) => {
			return { ...state, relevantProducts: payload };
		},
	},
	// define async actions
	extraReducers: ({ addCase }) => {
		addCase(getCartsAsync.pending, state => {
			return { ...state, status: Status.LOADING };
		});
		addCase(getCartsAsync.fulfilled, (state, { payload }: PayloadAction<CartWithPopulatedProducts[] | undefined>) => {
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
