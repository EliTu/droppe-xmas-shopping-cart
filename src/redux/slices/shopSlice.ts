import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartWithPopulatedProducts, Product, SelectedProductsData, ShopInitialState, Status } from './types';
import { getCartsAsync } from './thunks';
import { WISH_LIST_USERS } from './constants';

const initialState: ShopInitialState = {
	wishListUsers: WISH_LIST_USERS,
	carts: [],
	acceptedCarts: [],
	disregardedCarts: [],
	relevantProducts: [],
	selectedProductsData: [],
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
		addToSelectedProducts: (state, { payload }: PayloadAction<SelectedProductsData>) => {
			const newProducts: SelectedProductsData[] = [...state.selectedProductsData, payload];
			return { ...state, selectedProductsData: newProducts };
		},
		removeSelectedProducts: (state, { payload }: PayloadAction<SelectedProductsData>) => {
			const newProducts: SelectedProductsData[] = state.selectedProductsData.filter(({ cartId, productId }) => {
				// check for the relevant cart
				if (cartId === payload.cartId) {
					// then remove the relevant product, otherwise continue
					return productId !== payload.productId;
				}
				return true;
			});
			return { ...state, selectedProductsData: newProducts };
		},
	},
	// async actions
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
export const { setRelevantProducts, addToSelectedProducts, removeSelectedProducts } = shopSlice.actions;

export default shopSlice.reducer;
