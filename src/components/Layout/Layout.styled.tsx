import styled from 'styled-components';
import { FlexRowDiv } from '../../GlobalStyles.styled';
import { Spinner } from '../ui/Spinner';

export const MainAppLayout = styled.div`
	max-width: 100vw;
	max-height: 100vh;
	box-sizing: border-box;
	position: relative;
`;

export const ContentContainer = styled.main`
	/* calc 100vh (total page height) - footer height - header height */
	height: calc(100vh - 4rem - 4rem);
	margin: 0 1.5rem;
	overflow: hidden;
`;

export const FullPageLoader = styled(FlexRowDiv).attrs(() => ({
	children: <Spinner size={22} />,
}))`
	width: inherit;
	height: inherit;
	justify-content: center;
	align-items: center;
`;
