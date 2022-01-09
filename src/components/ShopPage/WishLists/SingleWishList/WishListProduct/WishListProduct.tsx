import { useCallback, useMemo, memo } from 'react';
import { addToSelectedProducts, removeSelectedProducts } from '../../../../../redux/slices/shopSlice';
import { Product, TargetProductPayload } from '../../../../../redux/slices/types';
import { useAppDispatch } from '../../../../../redux/store';
import { formatPrice } from '../../../../../utils';
import { Button, ButtonTypes } from '../../../../ui/Button';
import { FavoriteIndicatorBadge } from '../../../../ui/FavoriteIndicatorBadge';
import { InfoLabel } from '../../../../ui/InfoLabel';
import { StarRating } from '../../../../ui/StarRating';
import {
	PriceSpan,
	ProductContainer,
	ProductImage,
	ProductImageContainer,
	ProductInfoContainer,
	ProductTitle,
	RightSideContainer,
} from './WishListProduct.styled';

interface WishListProductProps {
	productData: Product;
	isFavorite: boolean;
	cartId: number;
	isSelected: boolean;
}

function WishListProduct({ productData, isFavorite, cartId, isSelected }: WishListProductProps) {
	const dispatch = useAppDispatch();

	const { title, image, price, rating, description, category, id: productId } = productData;
	const formattedPrice = formatPrice(price);

	const onButtonClick = useCallback(() => {
		const payload: TargetProductPayload = { productId, cartId };
		if (isSelected) {
			return dispatch(removeSelectedProducts(payload));
		}
		return dispatch(addToSelectedProducts([payload]));
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
				<StarRating rateData={rating} />
				<InfoLabel label="Category" value={category} />
				<InfoLabel label="Description" value={description} />
			</ProductInfoContainer>
			<RightSideContainer>
				<PriceSpan $isFavorite={isFavorite}>{formattedPrice}</PriceSpan>
				<Button type={!isSelected ? ButtonTypes.CONFIRM : ButtonTypes.DANGER} onClick={onButtonClick}>
					{buttonLabel}
				</Button>
			</RightSideContainer>
		</ProductContainer>
	);
}

export default memo(WishListProduct);
