import styled from 'styled-components';
import { FlexRowDiv } from '../../../GlobalStyles.styled';

export const InfoLabelContainer = styled(FlexRowDiv)<{ $fontSize: number }>`
	font-size: ${props => props.$fontSize}px;
	margin-bottom: 0.2rem;
`;

export const LabelField = styled.span`
	margin-inline-end: 0.4rem;
	font-weight: bold;
	width: 5rem;
`;

export const ValueField = styled.span``;
