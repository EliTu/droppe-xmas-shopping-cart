import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-size: 15px;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #0c0b0bc5;
  }
`;

const FlexRowDiv = styled.div`
	display: flex;
	flex-direction: row;
`;

export default GlobalStyles;
export { FlexRowDiv };
