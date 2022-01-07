import styled from 'styled-components';
import { FlexColumnDiv, FlexRowDiv } from '../../../GlobalStyles.styled';

export const WishListsSectionContainer = styled.section`
	width: 50%;
`;

export const WishListsHeaderContainer = styled(FlexRowDiv)``;

export const WishListHeaderControlsContainer = styled(FlexRowDiv)``;

export const WishListsContainer = styled(FlexColumnDiv)`
	width: 100%;
	height: calc(100vh - 11.5rem);
	overflow: auto;
`;
