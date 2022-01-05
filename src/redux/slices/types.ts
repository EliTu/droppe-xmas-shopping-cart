export interface WishListUser {
	name: string;
	associatedCartId: number;
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
	date: Date;
	products: UnpopulatedProduct[];
}

export enum Status {
	IDLE = 'idle',
	LOADING = 'loading',
	ERROR = 'error',
}

export interface ShopInitialState {
	carts: Cart[];
	wishListUsers: ReadonlyArray<WishListUser>; // in the case of this demo app, use an immutable static list of users, otherwise it shouldn't be ReadonlyArray
	products: Product[];
	acceptedCarts: Cart[];
	disregardedCarts: Cart[];
	status: Status;
	errorMessage: string | undefined;
}
