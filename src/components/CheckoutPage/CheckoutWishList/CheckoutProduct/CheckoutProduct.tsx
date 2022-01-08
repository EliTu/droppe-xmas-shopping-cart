import { useMemo } from 'react';
import { Rating } from 'react-simple-star-rating';
import { Product } from '../../../../redux/slices/types';
import {
	PriceCalculationSpan,
	PriceSpan,
	ProductContainer,
	ProductImage,
	ProductImageContainer,
	ProductInfoContainer,
	ProductTitle,
	RateCount,
	RatingContainer,
	SelectedProductSummary,
	SummaryLabel,
} from '../../../ShopPage/ShoppingCart/SelectedProduct/SelectedProduct.styled';
import { FavoriteIndicatorBadge } from '../../../ui/FavoriteIndicatorBadge';
import { calculateDiscount, formatPrice } from '../../../../utils';

interface CheckoutProductData {
	productData: Product;
	isFavorite: boolean;
	selectionAmount: number;
	isSelected?: boolean;
}

function CheckoutProduct({ productData, isFavorite, selectionAmount, isSelected }: CheckoutProductData) {
	const { title, image, price: originalPrice, rating } = productData;

	const isEligibleForDiscount = useMemo(() => isSelected && selectionAmount > 1, [selectionAmount]);

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
					<PriceSpan $isFavorite={isFavorite}>
						{formattedPrice}
						{isEligibleForDiscount && (
							<PriceCalculationSpan>
								({formatPrice(originalPrice)} x {selectionAmount})
							</PriceCalculationSpan>
						)}
					</PriceSpan>
					{isEligibleForDiscount && (
						<SummaryLabel>{`Discount: ${selectionAmount * 10}% (-${formattedAmountReduced})`}</SummaryLabel>
					)}
				</SelectedProductSummary>
			</ProductInfoContainer>
		</ProductContainer>
	);
}

export default CheckoutProduct;
