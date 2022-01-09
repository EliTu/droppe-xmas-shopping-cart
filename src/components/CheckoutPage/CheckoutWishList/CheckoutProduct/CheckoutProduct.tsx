import { Rating } from 'react-simple-star-rating';
import { Product } from '../../../../redux/slices/types';
import {
	PriceSpan,
	ProductContainer,
	ProductImage,
	ProductImageContainer,
	ProductInfoContainer,
	ProductTitle,
	RateCount,
	RatingContainer,
	SelectedProductSummary,
} from '../../../ShopPage/ShoppingCart/SelectedProduct/SelectedProduct.styled';
import { FavoriteIndicatorBadge } from '../../../ui/FavoriteIndicatorBadge';
import { formatPrice } from '../../../../utils';

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
				<RatingContainer>
					<Rating ratingValue={0} initialValue={rating.rate} size={16} readonly />
					<RateCount>{rating.rate} out of 5</RateCount>
					<RateCount> - Rated by {rating.count} reviewers</RateCount>
				</RatingContainer>
				<SelectedProductSummary>
					<PriceSpan $isFavorite={isFavorite}>{formatPrice(originalPrice)}</PriceSpan>
				</SelectedProductSummary>
			</ProductInfoContainer>
		</ProductContainer>
	);
}

export default CheckoutProduct;
