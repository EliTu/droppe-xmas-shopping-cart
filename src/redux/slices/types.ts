export interface WishListUser {
	name: string;
	associatedCartId: number;
	favoriteProductId: number;
}

export interface UnpopulatedProduct {
	productId: number;
	quantity: number;
}

export interface Product {
	id: number;
	title: string;
	price: number;
	category: string;
	description: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
}

export interface Cart {
	id: number;
	userId: number;
	date: string;
	products: UnpopulatedProduct[];
}

export interface CartWithPopulatedProducts extends Omit<Cart, 'products'> {
	products: Product[];
}

export enum Status {
	IDLE = 'idle',
	LOADING = 'loading',
	ERROR = 'error',
}

export interface SelectedProductsData {
	productId: number;
	cartId: number;
}
export interface ShopInitialState {
	carts: CartWithPopulatedProducts[];
	wishListUsers: ReadonlyArray<WishListUser>; // in the case of this demo app, use an immutable static list of users, otherwise it shouldn't be ReadonlyArray
	relevantProducts: Product[];
	selectedProductsData: SelectedProductsData[];
	acceptedCarts: CartWithPopulatedProducts[];
	disregardedCarts: CartWithPopulatedProducts[];
	status: Status;
	errorMessage: string | undefined;
}
