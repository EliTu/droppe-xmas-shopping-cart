import styled from 'styled-components';
import { FlexRowDiv } from '../../GlobalStyles.styled';

export const ShopPageContainer = styled(FlexRowDiv)`
	overflow: auto;
`;

export const SectionContainer = styled.section`
	width: 50%;
	height: auto;
	margin: 0 1rem;
`;

export const SectionHeaderContainer = styled(FlexRowDiv)`
	height: 3rem;
	align-items: center;
	justify-content: space-between;
`;

export const SectionHeader = styled.h3`
	margin: 0;
`;
