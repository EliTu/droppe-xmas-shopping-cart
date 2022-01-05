import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Cart } from './types';

const BASE_URL = 'https://fakestoreapi.com';

export const getCartsAsync = createAsyncThunk(
	'getAllCartsByUserCartId',
	async (userCartIds: number[], { rejectWithValue }) => {
		try {
			const getCartPromises = userCartIds.map(cartId =>
				axios.get<Cart>(`${BASE_URL}/carts/${cartId}`)
			);

			const productsData = (await Promise.all(getCartPromises)).map(
				promiseRes => promiseRes.data
			);

			if (productsData.length) return productsData;
		} catch (error) {
			if (error instanceof Error) {
				return rejectWithValue(error.message);
			}
		}
	}
);
