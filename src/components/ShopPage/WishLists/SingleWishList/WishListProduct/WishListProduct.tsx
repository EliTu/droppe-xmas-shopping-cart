import { Rating } from 'react-simple-star-rating';
import { Product } from '../../../../../redux/slices/types';
import { formatPrice } from '../../../../../utils';
import { Button } from '../../../../ui/Button';
import { InfoLabel } from '../../../../ui/InfoLabel';
import {
	FavoriteBadge,
	PriceSpan,
	ProductContainer,
	ProductImage,
	ProductImageContainer,
	ProductInfoContainer,
	ProductTitle,
	RateCount,
	RatingContainer,
	RightSideContainer,
} from './WishListProduct.styled';

interface WishListProductProps {
	productData: Product;
	isFavorite: boolean;
}

function WishListProduct({ productData, isFavorite }: WishListProductProps) {
	const { title, image, price, rating, description, category } = productData;
	const formattedPrice = formatPrice(price);

	return (
		<ProductContainer>
			<ProductImageContainer>
				<ProductImage alt={`Image of ${title}`} src={image} />
			</ProductImageContainer>
			<ProductInfoContainer>
				<ProductTitle $isFavorite={isFavorite}>
					{title}
					{isFavorite && <FavoriteBadge />}
				</ProductTitle>
				<RatingContainer>
					<Rating ratingValue={0} initialValue={rating.rate} size={16} readonly />
					<RateCount>{rating.rate} out of 5</RateCount>
					<RateCount> - Rated by {rating.count} reviewers</RateCount>
				</RatingContainer>
				<InfoLabel label="Category" value={category} />
				<InfoLabel label="Description" value={description} />
			</ProductInfoContainer>
			<RightSideContainer>
				<PriceSpan $isFavorite={isFavorite}>{formattedPrice}</PriceSpan>
				<Button>Add to cart</Button>
			</RightSideContainer>
		</ProductContainer>
	);
}

export default WishListProduct;
