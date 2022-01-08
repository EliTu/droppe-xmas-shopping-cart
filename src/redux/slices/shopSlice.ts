import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	CartWithPopulatedProducts,
	Product,
	SelectedProductsData,
	ShopInitialState,
	Status,
	TargetProductPayload,
} from './types';
import { getCartsAsync } from './thunks';
import { WISH_LIST_USERS } from './constants';

const initialState: ShopInitialState = {
	wishListUsers: WISH_LIST_USERS,
	carts: [],
	acceptedCarts: [],
	disregardedCarts: [],
	relevantProducts: [],
	selectedProductsRecord: {},
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
		addToSelectedProducts: (state, { payload }: PayloadAction<TargetProductPayload>) => {
			const { relevantProducts, carts, selectedProductsRecord } = state;
			const { cartId, productId } = payload;
			let newSelectedProductsRecord = {};

			// if a product already exists in the record, increment his amount and set the originCartIdsList
			if (selectedProductsRecord[productId]) {
				newSelectedProductsRecord = {
					...selectedProductsRecord,
					[productId]: {
						...selectedProductsRecord[productId],
						amount: selectedProductsRecord[productId].amount + 1,
						originCartIdsList: [...selectedProductsRecord[productId].originCartIdsList, cartId],
					},
				};
			} else {
				// otherwise, initialize and store the selected product data in the record
				const productData = relevantProducts.find(({ id }) => id === productId)!;
				const availableInCarts = carts
					.filter(({ products }) => products.some(({ id }) => id === productId))
					.map(({ id }) => id);

				newSelectedProductsRecord = {
					...selectedProductsRecord,
					[productId]: { productData, availableInCarts, originCartIdsList: [cartId], amount: 1 },
				};
			}

			return { ...state, selectedProductsRecord: newSelectedProductsRecord };
		},
		removeSelectedProducts: (state, { payload }: PayloadAction<TargetProductPayload>) => {
			const { cartId, productId } = payload;
			const targetProduct = state.selectedProductsRecord[productId];

			let newProductRecord: Record<number, SelectedProductsData> = {};

			// if the target product is a single product (amount of 1), delete it from the record
			if (targetProduct.amount === 1) {
				newProductRecord = { ...state.selectedProductsRecord };
				delete newProductRecord[productId];
			} else {
				// otherwise, reduce the amount and remove the cart id from the cart ids list to correctly remove it from the relevant wishlist
				newProductRecord = {
					...state.selectedProductsRecord,
					[productId]: {
						...targetProduct,
						amount: targetProduct.amount - 1,
						originCartIdsList: targetProduct.originCartIdsList.filter(id => id !== cartId),
					},
				};
			}

			return { ...state, selectedProductsRecord: newProductRecord };
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
