import { useMemo } from 'react';
import format from 'date-fns/format';
import { v4 as uuid } from 'uuid';
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
} from './SingleWishList.styled';

interface WishListProps {
	cartData: CartWithPopulatedProducts;
	WishListOwner: WishListUser;
}

function SingleWishList({ WishListOwner, cartData }: WishListProps) {
	console.log({ cartData, WishListOwner });
	const { date, products } = cartData;

	const title = `${WishListOwner.name}'s Wish List`;
	const formattedDate = `Created at: ${format(new Date(date), 'MM/dd/yyyy')}`;

	const totalListProductsPrice = products.reduce((acc, currentProduct) => acc + currentProduct.price, 0);
	const footerDataItems = useMemo(
		() => [
			{ label: 'Number of products in list', value: products.length },
			{ label: 'Total list price', value: formatPrice(totalListProductsPrice) },
		],
		[products, totalListProductsPrice]
	);

	return (
		<SingleWishListContainer>
			<WishListHeader>
				<WishListTitle>{title}</WishListTitle>
				<WishListDate>{formattedDate}</WishListDate>
			</WishListHeader>
			<ProductsContainer>
				{products.map(product => (
					<WishListProduct key={uuid()} productData={product} />
				))}
			</ProductsContainer>
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

export default SingleWishList;
