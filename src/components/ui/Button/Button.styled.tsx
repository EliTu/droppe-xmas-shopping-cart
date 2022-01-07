import styled from 'styled-components';

export const StyledButton = styled.button`
	background-color: navy;
	color: white;
	width: 90%;
	height: 2.5rem;
	cursor: pointer;
	font-size: 13px;
	transition: all 0.2s ease;

	&:hover {
		background-color: dodgerblue;
	}

	&:active {
		background-color: blue;
	}
`;
