import { Rating } from 'react-simple-star-rating';
import { Product } from '../../../../../redux/slices/types';
import { InfoLabel } from '../../../../ui/InfoLabel';
import {
	ProductContainer,
	ProductImage,
	ProductImageContainer,
	ProductInfoContainer,
	ProductInfoLabel,
	ProductTitle,
	RateCount,
	RatingContainer,
} from './WishListProduct.styled';

interface WishListProductProps {
	productData: Product;
}

function WishListProduct({ productData }: WishListProductProps) {
	const { title, image, price, rating, description, category } = productData;

	return (
		<ProductContainer>
			<ProductImageContainer>
				<ProductImage alt={`Image of ${title}`} src={image} />
			</ProductImageContainer>
			<ProductInfoContainer>
				<ProductTitle>{title}</ProductTitle>
				<RatingContainer>
					<Rating ratingValue={0} initialValue={rating.rate} size={16} readonly />
					<RateCount>{rating.rate} out of 5</RateCount>
					<RateCount> - Rated by {rating.count} reviewers</RateCount>
				</RatingContainer>
				<InfoLabel label="Category" value={category} />
				<InfoLabel label="Description" value={description} />
			</ProductInfoContainer>
		</ProductContainer>
	);
}

export default WishListProduct;
