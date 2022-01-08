import styled from 'styled-components';
import { FlexColumnDiv, FlexRowDiv } from '../../../../GlobalStyles.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CartControlsContainer = styled(FlexRowDiv)`
	width: 100%;
	height: 11vh;
	border: 1px solid #8a8a8abc;
	padding: 0.5rem;
	justify-content: space-between;
`;

export const CheckoutContainer = styled(FlexColumnDiv)`
	width: 30%;
	justify-content: space-between;
`;

export const PriceContainer = styled(FlexColumnDiv)`
	justify-content: center;
	margin: 0.2rem 0;
`;

export const TotalPriceSpan = styled.span`
	font-size: 22px;
	margin-inline-end: 0.5rem;
	font-weight: bold;
`;

export const TotalDiscountSpan = styled.span`
	font-size: 15px;
`;

export const ControlsContainer = styled(FlexColumnDiv)`
	width: 60%;
`;

export const ControlsLabel = styled.span`
	font-weight: bold;
	font-size: 18px;
	margin: 0.5rem 0;
`;

export const PresetButtonsContainer = styled.div<{ $numberOfFrs: number }>`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: ${props => '1fr '.repeat(props.$numberOfFrs)}; // 1fr for each button
	grid-gap: 1rem;
`;

export const ShoppingIcon = styled(FontAwesomeIcon).attrs(({}) => ({
	size: 'lg',
}))`
	margin-inline-start: 0.3rem;
`;
