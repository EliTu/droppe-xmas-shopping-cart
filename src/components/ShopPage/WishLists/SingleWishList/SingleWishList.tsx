import { useMemo, useState, memo } from 'react';
import { v4 as uuid } from 'uuid';
import format from 'date-fns/format';
import { CartWithPopulatedProducts, WishListUser } from '../../../../redux/slices/types';
import formatPrice from '../../../../utils/formatPrice';
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
	ToggleWishListButton,
} from './SingleWishList.styled';

interface WishListProps {
	cartData: CartWithPopulatedProducts;
	WishListOwner: WishListUser;
}

function SingleWishList({ WishListOwner, cartData }: WishListProps) {
	const { date, products } = cartData;
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

	const toggleWishList = () => setIsWishListOpen(prevState => !prevState);

	return (
		<SingleWishListContainer>
			<WishListHeader>
				<HeaderTitleArea>
					<WishListTitle>{title}</WishListTitle>
					<WishListDate>{formattedDate}</WishListDate>
				</HeaderTitleArea>
				<ToggleWishListButton isWishListOpen={isWishListOpen} onClick={toggleWishList} />
			</WishListHeader>
			{isWishListOpen && (
				<ProductsContainer>
					{products.map(product => (
						<WishListProduct key={uuid()} productData={product} isFavorite={product.id === favoriteProductId} />
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
