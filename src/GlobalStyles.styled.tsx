import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
  }

  body {
    font-size: 15px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #0c0b0bc5;
  }

  body,html {
    margin: 0;
    padding: 0;
  }
`;

export const FlexRowDiv = styled.div`
	display: flex;
	flex-direction: row;
`;

export const FlexColumnDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

export default GlobalStyles;
