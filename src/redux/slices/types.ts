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
	productData: Product;
	amount: number;
	availableInCarts: number[];
	originCartIdsList: number[];
}

export interface TargetProductPayload {
	productId: number;
	cartId: number;
}

export interface CheckoutProductData {
	productData: Product;
	amount: number;
}

export interface CheckoutCarts {
	id: number;
	userId: number;
	date: Date;
	acceptedProducts: CheckoutProductData[];
	disregardedProducts: CheckoutProductData[];
}

export interface ProductsToUpdateData {
	id: number;
	amount: number;
}
export interface UpdateCartPayloadData {
	userId: number;
	date: Date;
	products: ProductsToUpdateData[];
}

export interface UpdateCartApiData {
	id: number;
	payload: UpdateCartPayloadData;
}

export interface ShopInitialState {
	carts: CartWithPopulatedProducts[];
	wishListUsers: ReadonlyArray<WishListUser>; // in the case of this demo app, use an immutable static list of users, otherwise it shouldn't be ReadonlyArray
	relevantProducts: Product[];
	selectedProductsRecord: Record<number, SelectedProductsData>;
	checkoutCarts: CheckoutCarts[];
	status: Status;
	errorMessage: string | undefined;
}
