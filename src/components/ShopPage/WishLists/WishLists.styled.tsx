import styled from 'styled-components';
import { FlexColumnDiv, FlexRowDiv } from '../../../GlobalStyles.styled';

export const WishListsSectionContainer = styled.section`
	width: 50%;
`;

export const WishListsHeaderContainer = styled(FlexRowDiv)`
	height: 3rem;
	align-items: center;
	justify-content: space-between;
`;

export const WishListsSectionHeader = styled.h3`
	margin: 0;
`;

export const WishListHeaderControlsContainer = styled(FlexRowDiv)`
	margin-inline-end: 1rem;
`;

export const WishListsContainer = styled(FlexColumnDiv)`
	width: 100%;
	height: calc(100vh - 11.5rem);
	overflow: auto;
`;
