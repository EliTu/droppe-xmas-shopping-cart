import { useMemo, useState, memo } from 'react';
import { v4 as uuid } from 'uuid';
import format from 'date-fns/format';
import { CartWithPopulatedProducts, Product, WishListUser } from '../../../../redux/slices/types';
import { formatPrice, sortByField, SortDirection } from '../../../../utils';
import { WishListProduct } from './WishListProduct';
import {
	DataItemLabel,
	FooterDataItem,
	ProductsContainer,
	SingleWishListContainer,
	WishListDate,
	WishListFooter,
	WishListHeader,
	WishListTitle,
	HeaderTitleArea,
} from './SingleWishList.styled';
import { SortFields } from '../WishLists';
import { ToggleIndicator } from '../../../ui/ToggleIndicator';

interface WishListProps {
	cartData: CartWithPopulatedProducts;
	WishListOwner: WishListUser;
	sortParameter: SortFields;
	showFavoritesOnly: boolean;
}

function SingleWishList({ WishListOwner, cartData, sortParameter, showFavoritesOnly }: WishListProps) {
	const { date, products, id: cartId } = cartData;
	const { name, favoriteProductId } = WishListOwner;

	const [isWishListOpen, setIsWishListOpen] = useState(true);

	const title = `${name}'s Wish List`;
	const formattedDate = `Created at: ${format(new Date(date), 'MM/dd/yyyy')}`;

	const totalListProductsPrice = products.reduce((acc, currentProduct) => acc + currentProduct.price, 0);
	const footerDataItems = useMemo(
		() => [
			{ label: 'Number of products in list', value: products.length },
			{ label: 'Total list price', value: formatPrice(totalListProductsPrice) },
		],
		[products, totalListProductsPrice]
	);

	// check if a specific product has been marked as favorite by the wish list user
	const checkIfFavorite = (productId: number) => productId === favoriteProductId;

	// toggle open/closed list display state
	const toggleWishList = () => setIsWishListOpen(prevState => !prevState);

	// compute the current state of the products list, if some flags are true, handle them
	const computedProductList = useMemo(() => {
		if (showFavoritesOnly) {
			return products.filter(product => checkIfFavorite(product.id));
		}
		return products;
	}, [showFavoritesOnly, products]);

	const sortedProducts = useMemo(() => {
		// extract the correct field key and direction from the sort option value string (separated by an _)
		const [field, direction] = sortParameter.split('_') as [field: keyof Product, direction: SortDirection];
		return sortByField<Product>(computedProductList, field, direction);
	}, [products, sortParameter, computedProductList]);

	return (
		<SingleWishListContainer>
			<WishListHeader>
				<HeaderTitleArea>
					<WishListTitle>{title}</WishListTitle>
					<WishListDate>{formattedDate}</WishListDate>
				</HeaderTitleArea>
				<ToggleIndicator isOpen={isWishListOpen} toggleTargetLabel="products" onClick={toggleWishList} />
			</WishListHeader>
			{isWishListOpen && (
				<ProductsContainer>
					{sortedProducts.map(product => (
						<WishListProduct
							key={uuid()}
							productData={product}
							isFavorite={checkIfFavorite(product.id)}
							cartId={cartId}
						/>
					))}
				</ProductsContainer>
			)}
			<WishListFooter>
				{footerDataItems.map(({ label, value }) => (
					<FooterDataItem key={label}>
						<DataItemLabel>{label}:</DataItemLabel>
						<DataItemLabel $isValue>{value}</DataItemLabel>
					</FooterDataItem>
				))}
			</WishListFooter>
		</SingleWishListContainer>
	);
}

export default memo(SingleWishList);
