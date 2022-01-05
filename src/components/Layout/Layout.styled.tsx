import styled from 'styled-components';
import { FlexRowDiv } from '../../GlobalStyles.styled';
import Spinner from '../ui/Spinner/Spinner';

const MainAppLayout = styled.div`
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	overflow-x: hidden;
	overflow-y: hidden;
`;

const ContentContainer = styled.main`
	/* calc 100vh (total page height) - footer height - header height */
	min-height: calc(100vh - 4rem - 4rem);
`;

const FullPageLoader = styled(FlexRowDiv).attrs(() => ({
	children: <Spinner size={22} />,
}))`
	min-width: inherit;
	min-height: inherit;
	justify-content: center;
	align-items: center;
`;

export { MainAppLayout, ContentContainer, FullPageLoader };
