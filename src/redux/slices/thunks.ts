import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Cart } from './types';

const BASE_URL = 'https://fakestoreapi.com';

export const getCartsAsync = createAsyncThunk(
	'getAllCartsByUserCartId',
	async (userCartIds: number[]) => {
		const getCartPromises = userCartIds.map(cartId =>
			axios.get<Cart>(`${BASE_URL}/carts/${cartId}`)
		);
		const res = await Promise.all(getCartPromises);
		console.log(res);
	}
);
