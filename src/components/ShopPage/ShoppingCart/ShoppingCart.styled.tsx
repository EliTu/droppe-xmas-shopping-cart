import styled from 'styled-components';
import { FlexColumnDiv } from '../../../GlobalStyles.styled';

export const SelectedProductsContainer = styled(FlexColumnDiv)`
	border: 1px solid #8a8a8abc;
	height: 65vh;
	margin: 0.5rem 0;
	overflow: auto;
`;

export const NoProductsAvailable = styled(FlexColumnDiv)`
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	user-select: none;
`;
