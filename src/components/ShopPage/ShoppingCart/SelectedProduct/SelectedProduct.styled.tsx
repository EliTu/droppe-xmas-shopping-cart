import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BeforePseudoDivider, FlexColumnDiv, FlexRowDiv } from '../../../../GlobalStyles.styled';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

export const ProductContainer = styled(FlexRowDiv)`
	height: 7rem;
	border-bottom: 1px solid #8a8a8abc;
	padding: 0 0.2rem;
`;

export const ProductImageContainer = styled(FlexRowDiv)`
	height: auto;
	width: 8rem;
	justify-content: center;
	padding: 0.5rem;
`;

export const ProductImage = styled.img`
	max-width: 100%;
	height: auto;
`;

export const ProductInfoContainer = styled(FlexColumnDiv)`
	width: calc(100% - 8rem);
	padding: 0.5rem;
`;

export const ProductTitle = styled.span<{ $isFavorite: boolean }>`
	font-size: 16px;
	font-weight: bold;
	color: ${props => props.$isFavorite && 'goldenrod'};
`;

export const RatingContainer = styled(FlexRowDiv)`
	align-items: baseline;
	font-size: 11px;
	margin: 0.2rem 0.2rem 0.2rem 0;
`;

export const RateCount = styled.span`
	margin-inline-start: 0.2rem;
`;

export const ProductInfoLabel = styled.span`
	font-size: 12px;
	font-weight: bold;
`;

export const PriceSpan = styled.span<{ $isFavorite: boolean }>`
	font-weight: bold;
	font-size: 17px;
	color: ${props => props.$isFavorite && 'goldenrod'};
`;

export const PriceCalculationSpan = styled.span`
	font-size: 15px;
	margin-inline-start: 0.2rem;
`;

export const SelectedProductSummary = styled(FlexRowDiv)`
	align-items: center;
	height: 5rem;
`;

export const SummaryLabel = styled.span<{ $hideDivider?: boolean }>`
	font-weight: bold;
	font-size: 13px;

	${props => !props.$hideDivider && BeforePseudoDivider}
`;

export const RequestedByContainer = styled(FlexRowDiv)`
	font-size: 13px;
`;

export const UserNameSpan = styled.span<{ $isFavorite: boolean }>`
	margin: 0 0.1rem;
	color: ${props => (props.$isFavorite ? 'goldenrod' : 'initial')};

	/* set a comma after each name except for the last one */
	&:not(:last-child) {
		&::after {
			content: ' - ';
			color: initial;
		}
	}
`;

// we pass the icon?:any type to satisfy the TS compiler, as it can't correctly infer that this styled FontAwesomeIcon component already
// pass icon internally
export const PurchasedForUserIndicator = styled(FontAwesomeIcon).attrs<{ $isPurchased: boolean; icon?: any }>(
	({ $isPurchased }) => ({
		icon: $isPurchased ? faCheck : faTimes,
	})
)<{ $isPurchased: boolean; icon?: any }>`
	color: ${props => (props.$isPurchased ? 'dodgerblue' : 'crimson')};
	margin-inline-start: 0.2rem;
`;
