import { TargetProductPayload, WishListUser, CartWithPopulatedProducts, Product } from '../redux/slices/types';

export enum PresetName {
	FAVORITES = 'allFavorites',
	CHEAPEST = 'allCheapest',
	ALL_PRODUCTS = 'allProducts',
}

/**
 * Get all the relevant product data for the presets, defined by the preset name
 * @param presetName The name of the required preset
 * @param carts The carts data
 * @param wishListUsers The users data
 * @returns Selected products data to dispatch
 */
function getPresetsData(
	presetName: PresetName,
	carts: CartWithPopulatedProducts[],
	wishListUsers: ReadonlyArray<WishListUser>
) {
	return carts.reduce<TargetProductPayload[]>((accDataArray, currentCart) => {
		const products = currentCart.products;

		switch (presetName) {
			case PresetName.FAVORITES: {
				const favorite = getFavorites(wishListUsers, products, currentCart);
				return [...accDataArray, { cartId: currentCart.id, productId: favorite.id }];
			}
			case PresetName.CHEAPEST: {
				const cheapest = getCheapest(products);
				return [...accDataArray, { cartId: currentCart.id, productId: cheapest.id }];
			}
			case PresetName.ALL_PRODUCTS: {
				for (const product of products) {
					accDataArray = [...accDataArray, { cartId: currentCart.id, productId: product.id }];
				}
				return accDataArray;
			}
			default: {
				return accDataArray;
			}
		}
	}, []);
}

function getFavorites(
	wishListUsers: ReadonlyArray<WishListUser>,
	products: Product[],
	currentCart: CartWithPopulatedProducts
) {
	const associatedUser = wishListUsers.find(user => user.associatedCartId === currentCart.id)!;
	return products.find(product => product.id === associatedUser.favoriteProductId)!;
}

function getCheapest(products: Product[]) {
	return products.reduce((a, b) => (a.price < b.price ? a : b));
}

export default getPresetsData;
