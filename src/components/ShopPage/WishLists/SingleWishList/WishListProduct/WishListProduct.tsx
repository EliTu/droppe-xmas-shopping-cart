import { useCallback, useMemo, memo } from 'react';
import { useDispatch } from 'react-redux';
import { Rating } from 'react-simple-star-rating';
import { addToSelectedProducts, removeSelectedProducts } from '../../../../../redux/slices/shopSlice';
import { Product } from '../../../../../redux/slices/types';
import { formatPrice } from '../../../../../utils';
import { Button } from '../../../../ui/Button';
import { FavoriteIndicatorBadge } from '../../../../ui/FavoriteIndicatorBadge';
import { InfoLabel } from '../../../../ui/InfoLabel';
import {
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
	cartId: number;
	isSelected: boolean;
}

function WishListProduct({ productData, isFavorite, cartId, isSelected }: WishListProductProps) {
	const dispatch = useDispatch();

	const { title, image, price, rating, description, category, id: productId } = productData;
	const formattedPrice = formatPrice(price);

	const onButtonClick = useCallback(() => {
		const payload = { productId, cartId };
		if (isSelected) {
			return dispatch(removeSelectedProducts(payload));
		}
		return dispatch(addToSelectedProducts(payload));
	}, [isSelected]);

	const buttonLabel = useMemo(() => (!isSelected ? 'Add to cart' : 'Remove from cart'), [isSelected]);

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
				<InfoLabel label="Category" value={category} />
				<InfoLabel label="Description" value={description} />
			</ProductInfoContainer>
			<RightSideContainer>
				<PriceSpan $isFavorite={isFavorite}>{formattedPrice}</PriceSpan>
				<Button onClick={onButtonClick}>{buttonLabel}</Button>
			</RightSideContainer>
		</ProductContainer>
	);
}

export default memo(WishListProduct);
