import styled from 'styled-components';
import { FlexColumnDiv, FlexRowDiv } from '../../GlobalStyles.styled';
import { Button } from '../ui/Button';

export const CheckoutPageContainer = styled.section`
	width: 100%;
	height: calc(100vh - 4rem);
	display: flex;
	margin: 0.2rem 1rem;
`;

export const CheckoutWishListsContainer = styled.div`
	height: 100%;
	width: 60%;
	overflow: auto;
`;

export const CheckoutSummaryContainer = styled(FlexColumnDiv)`
	width: 40%;
	align-items: center;
`;

export const CheckoutSummaryTitle = styled.h2`
	font-size: 25px;
	font-weight: bold;
	text-decoration: underline;
	align-self: center;
`;

export const CheckoutSummaryDataContainer = styled(FlexColumnDiv)`
	width: 50%;
	align-items: center;
	font-size: 20px;
`;

export const SummaryItemRow = styled(FlexRowDiv)`
	width: 100%;
	justify-content: space-between;
	margin: 0.4rem 0;
`;

export const SummaryItemLabel = styled.span`
	font-weight: bold;
`;

export const CheckoutSummaryPriceDataContainer = styled(FlexColumnDiv)`
	width: 50%;
	margin: 2rem 0;
`;

export const PriceLabel = styled.span`
	font-size: 22px;
`;

export const TotalPriceLabel = styled.span`
	margin-top: 0.5rem;
	border-top: 1px solid black;
	font-size: 36px;
	font-weight: bold;
`;

export const CheckoutButtonsContainer = styled(FlexRowDiv)`
	width: 90%;
	height: 3rem;
	margin-top: 1rem;
`;
