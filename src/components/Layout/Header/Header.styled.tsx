import { Link } from 'react-router-dom';
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
		border: 1px solid #ffffffa2;
		background: #ffffffa2;
		opacity: 0.7;
		margin-inline-start: 0.8rem;
	}
`;

export const MainTitle = styled.h1`
	font-size: 24px;
	color: #ffffffa2;
`;

export const NavLinksContainer = styled(FlexRowDiv)`
	justify-content: start;
	align-items: center;
	width: 70%;
	padding: 0 0.2rem;
	margin-inline-start: 0.2rem;
`;

export const StyledLink = styled(Link)<{ isActive?: boolean }>`
	width: auto;
	height: 100%;
	color: #ffffffa2;
	text-decoration: none;
	font-size: 18px;
	padding: 0 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s ease;
	border-bottom: ${props => (props.isActive ? '8px solid #ffffffa2' : '')};
	background-color: ${props => (props.isActive ? 'royalblue' : '')};

	&:hover {
		background-color: royalblue;
	}
	&:active {
		background-color: navy;
	}
`;
