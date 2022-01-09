import { RootState } from './../store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getApiDataByIdList, updateCartByCartList } from './helpers';
import { setRelevantProducts } from './shopSlice';
import { Cart, CartWithPopulatedProducts, Product } from './types';

export const getCartsAsync = createAsyncThunk(
	'getAllCartsByUserCartId',
	async (userCartIds: number[], { rejectWithValue, dispatch }) => {
		try {
			// get data for all the relevant carts, without the full cart products data
			const cartsDataRes = await getApiDataByIdList<Cart>(userCartIds, 'carts');

			// once the cartData has arrived, populate the relevant cart items with the full product data
			if (cartsDataRes.length) {
				const productMapCache = new Map<number, number>(); // implement a simple cache to prevent multi-API calls for the same product
				for (const cartData of cartsDataRes) {
					const products = cartData.products;
					for (const { productId } of products) {
						if (productMapCache.has(productId)) continue;
						productMapCache.set(productId, productId);
					}
				}

				// get the full products data from the API for all the relevant cart products
				const productIdsList = [...productMapCache.values()];
				const fullProductDataRes = await getApiDataByIdList<Product>(productIdsList, 'products');

				dispatch(setRelevantProducts(fullProductDataRes)); // meanwhile, set the store's relevant products list

				// go over the previous cart data and replace the products with the products full data
				const cartsWithPopulatedProducts: CartWithPopulatedProducts[] = cartsDataRes.map(cart => {
					const productsData = cart.products.map(
						cartProduct => fullProductDataRes.find(productData => productData.id === cartProduct.productId)! // a product is certain to be found
					);
					return { ...cart, products: productsData };
				});

				return cartsWithPopulatedProducts;
			}
		} catch (error) {
			if (error instanceof Error) {
				return rejectWithValue(error.message);
			}
		}
	}
);

export const updateCartsAsync = createAsyncThunk('updateCartsOnPurchase', async (_, { getState, rejectWithValue }) => {
	const { shop } = getState() as RootState; // access the current store state
	const { checkoutCarts } = shop;

	try {
		// pass the checkout carts to be updated
		await updateCartByCartList(checkoutCarts);
	} catch (error) {
		if (error instanceof Error) {
			return rejectWithValue(error.message);
		}
	}
});
