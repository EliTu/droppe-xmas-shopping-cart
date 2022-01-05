import styled from 'styled-components';
import { FlexRowDiv } from '../../../GlobalStyles.styled';

export const HeaderContainer = styled.header`
	height: 4rem;
	display: flex;
	background-color: dodgerblue;
	box-shadow: 0 0 5px black;
	padding: 0 2rem;
	user-select: none;
`;

export const TitleContainer = styled(FlexRowDiv)`
	align-items: center;

	&::after {
		content: '';
		height: 70%;
		border: 2px solid black;
		background: black;
		opacity: 0.7;
		margin-inline-start: 0.8rem;
	}
`;

export const MainTitle = styled.h1`
	font-size: 24px;
	color: #100e0ec2;
`;
