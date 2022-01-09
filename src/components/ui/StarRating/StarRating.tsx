import { Rating } from 'react-simple-star-rating';
import { RateCount, RatingContainer } from './StartRating.styled';

interface StarRatingProps {
	rateData: {
		rate: number;
		count: number;
	};
}

function StarRating({ rateData }: StarRatingProps) {
	return (
		<RatingContainer>
			<Rating ratingValue={0} initialValue={rateData.rate} size={16} readonly />
			<RateCount>{rateData.rate} out of 5</RateCount>
			<RateCount> - Rated by {rateData.count} reviewers</RateCount>
		</RatingContainer>
	);
}

export default StarRating;
