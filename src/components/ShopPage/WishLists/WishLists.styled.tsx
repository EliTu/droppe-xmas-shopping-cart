import styled from 'styled-components';
import { FlexColumnDiv, FlexRowDiv } from '../../../GlobalStyles.styled';

export const WishListHeaderControlsContainer = styled(FlexRowDiv)`
	margin-inline-end: 1rem;
`;

export const WishListsContainer = styled(FlexColumnDiv)`
	width: 100%;
	height: calc(100vh - 11.5rem);
	overflow: auto;
`;
