import styled from 'styled-components';
import { FlexColumnDiv, FlexRowDiv } from '../../../../GlobalStyles.styled';

export const SingleWishListContainer = styled(FlexColumnDiv)`
	width: 100%;
	height: 18rem;
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
