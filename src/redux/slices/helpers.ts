import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from './constants';
import { UpdateCartApiData } from './types';

/**
 * This is a helper function to loop over a list of ids and call the API to GET the full data for each list member.
 * @param idsList list of ids
 * @param targetAPI the API to call over the base url, i.e. carts, products, users, etc...
 * @returns a Promise containing the result API data
 * @example getApiDataByIdList<UserRes>([1, 2], 'users') -> [{userId: 1, name: 'John'}, {userId: 2, name: 'Jane'}]
 */
export async function getApiDataByIdList<TPromiseRes>(idsList: number[], targetAPI: string) {
	const idListWithoutDuplicates = [...new Set(idsList)]; // remove any duplicates to prevent redundant API calls
	const setPromisesList = idListWithoutDuplicates.map(id => axios.get<TPromiseRes>(`${BASE_URL}/${targetAPI}/${id}`));

	return await settlePromiseAll(setPromisesList);
}

/**
 * This is a helper function to loop over a list of ids and call the API to UPDATE the full data for each list member.
 * @param updateDataList list of ids and their corresponding payloads
 * @param targetAPI the API to call over the base url, i.e. carts, products, users, etc...
 * @returns a Promise containing the result API data
 * @example updateApiByIdLis<CartsRes>([{id: 1, [{id: 1, userId: 2, products: [{id: 1, amount 2}, {id: 5, amount 1}]}]}])
 */
export async function updateApiByIdList<TPromiseRes>(updateDataList: UpdateCartApiData[], targetAPI: string) {
	const setCartsPromiseList = updateDataList.map(({ id, payload }) =>
		axios.put<TPromiseRes>(`${BASE_URL}/${targetAPI}/${id}`, payload)
	);
	return await settlePromiseAll(setCartsPromiseList);
}

/**
 * Small auxiliary function to handle the Promise.all operation for the API helpers
 * @param promiseList list of promises to loop over and settle
 * @returns an array of settled promises
 */
async function settlePromiseAll<TPromiseRes>(
	promiseList: Promise<AxiosResponse<TPromiseRes, any>>[]
): Promise<TPromiseRes[]> {
	return (await Promise.all(promiseList)).map(promiseRes => promiseRes.data);
}
