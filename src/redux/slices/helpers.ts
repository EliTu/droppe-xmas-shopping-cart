import axios from 'axios';
import { BASE_URL } from './constants';
import { CheckoutCarts } from './types';

/**
 * This is a helper function to loop over a list of ids and call the API to get the full data for each list member.
 * @param idsList list of ids
 * @param targetAPI the API to call over the base url, i.e. carts, products, users, etc...
 * @returns a Promise containing the result API data
 * @example getApiDataByIdList<UserRes>([1, 2], 'users') -> [{userId: 1, name: 'John'}, {userId: 2, name: 'Jane'}]
 */
export async function getApiDataByIdList<TPromiseRes>(idsList: number[], targetAPI: string) {
	const idListWithoutDuplicates = [...new Set(idsList)]; // remove any duplicates to prevent redundant API calls
	const setPromisesList = idListWithoutDuplicates.map(id => axios.get<TPromiseRes>(`${BASE_URL}/${targetAPI}/${id}`));

	return (await Promise.all(setPromisesList)).map(promiseRes => promiseRes.data);
}

/**
 * This is a simple helper that performs a PUT operation to update the user carts on the API when the user confirms his purchase.
 * @param cartsList List of the relevant carts to checkout and update on the API
 * @returns PUT operation response
 */
export async function updateCartByCartList(cartsList: CheckoutCarts[]) {
	const setCartsPromiseList = cartsList.map(({ acceptedProducts, date, disregardedProducts, userId, id }) => {
		// The API expects an {id, amount} array of objects
		const updatedProducts = [...acceptedProducts, ...disregardedProducts].map(({ productData, amount }) => ({
			id: productData.id,
			amount,
		}));
		const payload = {
			userId,
			date,
			products: updatedProducts,
		};
		return axios.put(`${BASE_URL}/carts/${id}`, payload);
	});
	return (await Promise.all(setCartsPromiseList)).map(promiseRes => promiseRes.data);
}
