import styled from 'styled-components';
import { FlexRowDiv } from '../../../GlobalStyles.styled';

export const CheckboxGroupContainer = styled.div<{ $flexDirection: 'row' | 'column' }>`
	display: flex;
	flex-direction: ${props => props.$flexDirection};
`;

export const CheckboxItemContainer = styled(FlexRowDiv)`
	input {
		cursor: pointer;
	}
`;
