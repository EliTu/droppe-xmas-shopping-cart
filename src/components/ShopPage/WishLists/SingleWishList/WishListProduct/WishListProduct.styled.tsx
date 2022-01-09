import styled from 'styled-components';
import { FlexColumnDiv, FlexRowDiv } from '../../../../../GlobalStyles.styled';

export const ProductContainer = styled(FlexRowDiv)`
	height: auto;
	border-bottom: 1px solid #8a8a8abc;
	padding: 0 1rem 0 0.2rem;
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
	width: calc(100% - 8rem - 6rem);
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

export const RightSideContainer = styled(FlexColumnDiv)`
	width: 6rem;
	align-items: center;
	justify-content: center;
`;

export const PriceSpan = styled.span<{ $isFavorite: boolean }>`
	font-weight: bold;
	font-size: 18px;
	margin: 0.5rem 0;
	color: ${props => props.$isFavorite && 'goldenrod'};
`;
