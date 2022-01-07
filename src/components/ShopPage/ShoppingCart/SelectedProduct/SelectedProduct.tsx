import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Rating } from 'react-simple-star-rating';
import { Product } from '../../../../redux/slices/types';
import { RootState } from '../../../../redux/store';
import { formatPrice } from '../../../../utils';
import { FavoriteIndicatorBadge } from '../../../ui/FavoriteIndicatorBadge';
import {
	PriceSpan,
	ProductContainer,
	ProductImage,
	ProductImageContainer,
	ProductInfoContainer,
	ProductTitle,
	RateCount,
	RatingContainer,
	RequestedByContainer,
	SelectedProductSummary,
	SummaryLabel,
	UserNameSpan,
} from './SelectedProduct.styled';

interface SelectedProduct {
	productData: Product;
	selectionAmount: number;
	availableInCarts: number[];
}

function SelectedProduct({ productData, selectionAmount, availableInCarts }: SelectedProduct) {
	const { title, image, price, rating } = productData;
	const { wishListUsers } = useSelector(({ shop }: RootState) => shop);

	const formattedPrice = formatPrice(price * selectionAmount);

	const relevantUserNamesList = useMemo(
		() =>
			wishListUsers
				.filter(({ associatedCartId }) => availableInCarts.includes(associatedCartId))
				.map(({ name }) => name),
		[availableInCarts, wishListUsers]
	);

	const favoriteInList = useMemo(
		() => wishListUsers.filter(({ favoriteProductId }) => favoriteProductId === productData.id),
		[wishListUsers, productData]
	);

	const isFavoriteInAnyList = Boolean(favoriteInList.length);

	return (
		<ProductContainer>
			<ProductImageContainer>
				<ProductImage alt={`Image of ${title}`} src={image} />
			</ProductImageContainer>
			<ProductInfoContainer>
				<ProductTitle $isFavorite={isFavoriteInAnyList}>
					{title}
					{isFavoriteInAnyList && <FavoriteIndicatorBadge amount={favoriteInList.length} />}
				</ProductTitle>
				<RatingContainer>
					<Rating ratingValue={0} initialValue={rating.rate} size={16} readonly />
					<RateCount>{rating.rate} out of 5</RateCount>
					<RateCount> - Rated by {rating.count} reviewers</RateCount>
				</RatingContainer>
				<SelectedProductSummary>
					<PriceSpan $isFavorite={isFavoriteInAnyList}>{formattedPrice}</PriceSpan>
					<RequestedByContainer>
						<SummaryLabel>Requested by:</SummaryLabel>
						{relevantUserNamesList.map(name => {
							const isFavorite = favoriteInList.map(({ name }) => name).includes(name);
							return (
								<UserNameSpan $isFavorite={isFavorite} key={name}>
									{name}
								</UserNameSpan>
							);
						})}
					</RequestedByContainer>
				</SelectedProductSummary>
			</ProductInfoContainer>
		</ProductContainer>
	);
}

export default SelectedProduct;
