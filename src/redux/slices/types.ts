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

interface SerializedError {
	name?: string;
	message?: string;
	code?: string;
	stack?: string;
}

export interface ShopInitialState {
	carts: Cart[];
	wishListUsers: ReadonlyArray<WishListUser>; // in the case of this demo app, use an immutable static list of users, otherwise it shouldn't be ReadonlyArray
	products: Product[];
	acceptedCarts: Cart[];
	disregardedCarts: Cart[];
	isLoading: boolean;
	error: SerializedError | null;
}
