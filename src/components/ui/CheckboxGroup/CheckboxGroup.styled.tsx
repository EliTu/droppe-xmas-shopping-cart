import styled from 'styled-components';
import { FlexRowDiv } from '../../../GlobalStyles.styled';

export const CheckboxGroupContainer = styled.div<{ $flexDirection: 'row' | 'column' }>`
	display: flex;
	flex-direction: ${props => props.$flexDirection};
	max-width: 100%;
	flex-wrap: wrap;
`;

export const CheckboxItemContainer = styled(FlexRowDiv)`
	align-items: center;
	justify-content: center;
	margin: 0 0.3rem;

	input {
		cursor: pointer;
		width: 18px;
		height: 18px;
	}
	label {
		font-size: 14px;
		cursor: pointer;
		user-select: none;
	}
`;
