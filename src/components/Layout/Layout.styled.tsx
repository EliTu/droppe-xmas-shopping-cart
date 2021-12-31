import styled from 'styled-components';

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

export { MainAppLayout, ContentContainer };
