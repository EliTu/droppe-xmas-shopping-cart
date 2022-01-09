import { Product } from '../../../../redux/slices/types';
import {
	PriceSpan,
	ProductContainer,
	ProductImage,
	ProductImageContainer,
	ProductInfoContainer,
	ProductTitle,
	SelectedProductSummary,
} from '../../../ShopPage/ShoppingCart/SelectedProduct/SelectedProduct.styled';
import { FavoriteIndicatorBadge } from '../../../ui/FavoriteIndicatorBadge';
import { formatPrice } from '../../../../utils';
import { StarRating } from '../../../ui/StarRating';

interface CheckoutProductData {
	productData: Product;
	isFavorite: boolean;
}

function CheckoutProduct({ productData, isFavorite }: CheckoutProductData) {
	const { title, image, price: originalPrice, rating } = productData;

	return (
		<ProductContainer>
			<ProductImageContainer>
				<ProductImage alt={`Image of ${title}`} src={image} />
			</ProductImageContainer>
			<ProductInfoContainer>
				<ProductTitle $isFavorite={isFavorite}>
					{title}
					{isFavorite && <FavoriteIndicatorBadge />}
				</ProductTitle>
				<StarRating rateData={rating} />
				<SelectedProductSummary>
					<PriceSpan $isFavorite={isFavorite}>{formatPrice(originalPrice)}</PriceSpan>
				</SelectedProductSummary>
			</ProductInfoContainer>
		</ProductContainer>
	);
}

export default CheckoutProduct;
