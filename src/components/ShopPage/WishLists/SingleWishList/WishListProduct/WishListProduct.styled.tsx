import styled from 'styled-components';
import { FlexColumnDiv, FlexRowDiv } from '../../../../../GlobalStyles.styled';

export const ProductContainer = styled(FlexRowDiv)`
	height: auto;
	border: 1px solid #8a8a8abc;
`;

export const ProductImageContainer = styled(FlexRowDiv)`
	height: auto;
	width: 8rem;
	justify-content: center;
	padding: 0.5rem;
	border-right: 1px solid #8a8a8abc;
`;

export const ProductImage = styled.img`
	max-width: 100%;
	height: auto;
`;

export const ProductInfoContainer = styled(FlexColumnDiv)`
	width: calc(100% - 8rem - 6rem);
	padding: 0.5rem;
`;

export const ProductTitle = styled.span`
	font-size: 16px;
	font-weight: bold;
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
	/* border-left: 1px solid #8a8a8abc; */
	align-items: center;
	justify-content: flex-end;
	padding: 0.5rem 0;
`;

export const PriceSpan = styled.span`
	font-weight: bold;
	font-size: 18px;
	margin: 0.5rem 0;
`;
