import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Rating } from 'react-simple-star-rating';
import { Product } from '../../../../redux/slices/types';
import { RootState } from '../../../../redux/store';
import { calculateDiscount, formatPrice } from '../../../../utils';
import { FavoriteIndicatorBadge } from '../../../ui/FavoriteIndicatorBadge';
import {
	DiscountCalculationSpan,
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
	const { title, image, price: originalPrice, rating } = productData;
	const { wishListUsers } = useSelector(({ shop }: RootState) => shop);

	const isEligibleForDiscount = useMemo(() => selectionAmount > 1, [selectionAmount]);

	// calculate the price according to the amount selected (discount)
	const { formattedPrice, formattedAmountReduced } = useMemo(() => {
		// if the it's a single product, escape calculating a discount as it doesn't qualify for a discount
		if (!isEligibleForDiscount) {
			return {
				formattedPrice: formatPrice(originalPrice),
				formattedDiscountAmount: 0,
			};
		}

		const priceByAmountSelected = originalPrice * selectionAmount;
		const discountPercentage = selectionAmount * 10; // represent the percentage as an integer
		const { amountAfterDiscount, amountReduced } = calculateDiscount(priceByAmountSelected, discountPercentage);

		return {
			formattedPrice: formatPrice(amountAfterDiscount),
			formattedAmountReduced: formatPrice(amountReduced),
		};
	}, [originalPrice, selectionAmount]);

	// get a list of names of all the users that have requested this product
	const relevantUserNamesList = useMemo(
		() =>
			wishListUsers
				.filter(({ associatedCartId }) => availableInCarts.includes(associatedCartId))
				.map(({ name }) => name),
		[availableInCarts, wishListUsers]
	);

	// get a list of users where the product is a selected favorite
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
					<PriceSpan $isFavorite={isFavoriteInAnyList}>
						{formattedPrice}
						{isEligibleForDiscount && (
							<DiscountCalculationSpan>
								({formatPrice(originalPrice)} x {selectionAmount})
							</DiscountCalculationSpan>
						)}
					</PriceSpan>
					{isEligibleForDiscount && (
						<SummaryLabel>{`Discount: ${selectionAmount * 10}% (-${formattedAmountReduced})`}</SummaryLabel>
					)}
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
