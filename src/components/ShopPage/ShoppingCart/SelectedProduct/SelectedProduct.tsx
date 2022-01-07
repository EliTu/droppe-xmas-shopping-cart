import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Rating } from 'react-simple-star-rating';
import { Product } from '../../../../redux/slices/types';
import { formatPrice } from '../../../../utils';
import { InfoLabel } from '../../../ui/InfoLabel';
import { ToggleIndicator } from '../../../ui/ToggleIndicator';
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
} from './SelectedProduct.styled';

interface SelectedProduct {
	productData: Product;
	isFavorite: boolean;
	amount: number;
	availableInCarts: number[];
}

function SelectedProduct({ productData, isFavorite, amount, availableInCarts }: SelectedProduct) {
	const { title, image, price, rating, description, category } = productData;
	const [showDetails, setShowDetails] = useState(false);
	const formattedPrice = formatPrice(price);

	// toggle open/closed extra info display state
	const toggleProductDetailsBox = () => setShowDetails(prevState => !prevState);

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
				{/* <ToggleIndicator isOpen={showDetails} toggleTargetLabel="Details" onClick={toggleProductDetailsBox} />
				{showDetails && (
					<>
						<InfoLabel label="Category" value={category} />
						<InfoLabel label="Description" value={description} />
					</>
				)} */}
			</ProductInfoContainer>
			{/* <RightSideContainer>
				<PriceSpan $isFavorite={isFavorite}>{formattedPrice}</PriceSpan>
			</RightSideContainer> */}
		</ProductContainer>
	);
}

export default SelectedProduct;
