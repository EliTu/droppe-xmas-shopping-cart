import styled from 'styled-components';
import { FlexRowDiv } from '../../../GlobalStyles.styled';

export const StyledSelect = styled.select`
	height: 100%;
`;

export const SelectContainer = styled(FlexRowDiv)`
	justify-content: center;
	align-items: center;
`;

export const OuterLabel = styled.span`
	margin-inline-end: 0.2rem;
	font-size: 13px;
`;
