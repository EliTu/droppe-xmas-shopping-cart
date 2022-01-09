import styled from 'styled-components';
import { FlexRowDiv } from '../../../GlobalStyles.styled';

export const AcceptanceCategoryHeader = styled(FlexRowDiv)<{ $isSelected?: boolean }>`
	justify-content: center;
	align-items: center;
	font-size: 15px;
	border-bottom: 1px solid #8a8a8abc;
	font-weight: bold;
	padding: 0.3rem 0;
	color: ${props => (props.$isSelected ? 'dodgerblue' : 'crimson')};
`;

export const ProductsSummarySpan = styled.span`
	font-size: 13px;
`;
