import styled from 'styled-components';
import { FlexColumnDiv, FlexRowDiv } from '../../../../GlobalStyles.styled';

export const SingleWishListContainer = styled(FlexColumnDiv)`
	width: 100%;
	border: 1px solid black;
	margin: 0.5rem 0;
`;

export const WishListHeader = styled(FlexColumnDiv)`
	width: 100%;
	border-bottom: 1px solid black;
	padding: 0.5rem;
	align-items: start;
`;

export const WishListTitle = styled.span`
	font-weight: bold;
`;

export const WishListDate = styled.span`
	font-size: 12px;
`;

export const ProductsContainer = styled(FlexColumnDiv)`
	width: 100%;
`;

export const WishListFooter = styled(FlexRowDiv)`
	width: 100%;
	padding: 0.5rem;
	font-size: 12px;
`;

export const FooterDataItem = styled.span`
	&:not(:first-child) {
		::before {
			content: '';
			width: 90%;
			border: 0.5px solid black;
			opacity: 0.4;
			margin: 0 0.5rem;
		}
	}
`;
