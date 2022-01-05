import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setRelevantProducts } from './shopSlice';
import { Cart, CartWithPopulatedProducts, Product } from './types';

const BASE_URL = 'https://fakestoreapi.com';

export const getCartsAsync = createAsyncThunk(
	'getAllCartsByUserCartId',
	async (userCartIds: number[], { rejectWithValue, dispatch }) => {
		try {
			// get data for all the relevant carts, without the full cart products data
			const getCartPromises = userCartIds.map(cartId => axios.get<Cart>(`${BASE_URL}/carts/${cartId}`));
			const cartsDataRes = (await Promise.all(getCartPromises)).map(promiseRes => promiseRes.data);

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

				const productsPromises = [...productMapCache.values()].map(productId =>
					axios.get<Product>(`${BASE_URL}/products/${productId}`)
				);
				const fullProductDataRes = (await Promise.all(productsPromises)).map(promiseRes => promiseRes.data);
				dispatch(setRelevantProducts(fullProductDataRes));

				// go over the previous cart data and replace the products with the products full data
				const cartDataWithPopulatedProducts: CartWithPopulatedProducts[] = cartsDataRes.map(cart => {
					const productsData = cart.products.map(
						cartProduct => fullProductDataRes.find(productData => productData.id === cartProduct.productId)!
					);
					return { ...cart, products: productsData };
				});

				return cartDataWithPopulatedProducts;
			}
		} catch (error) {
			if (error instanceof Error) {
				return rejectWithValue(error.message);
			}
		}
	}
);
