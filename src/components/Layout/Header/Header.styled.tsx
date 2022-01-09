import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexRowDiv } from '../../../GlobalStyles.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGifts } from '@fortawesome/free-solid-svg-icons';

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

export const GiftIcon = styled(FontAwesomeIcon).attrs(({}) => ({
	icon: faGifts,
	size: '3x',
}))`
	margin: 0 0.3em;
	color: #ffffffa2;
`;

export const NavLinksContainer = styled(FlexRowDiv)`
	justify-content: start;
	align-items: center;
	width: 70%;
	padding: 0 0.2rem;
	margin-inline-start: 0.2rem;
`;

export const StyledLink = styled(Link)<{ $isActive?: boolean }>`
	width: 8rem;
	height: 100%;
	color: #ffffffa2;
	text-decoration: none;
	font-size: 18px;
	padding: 0 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s ease;
	border-bottom: ${props => (props.$isActive ? '8px solid #ffffffa2' : '')};
	background-color: ${props => (props.$isActive ? '#b5c9f5a2' : '')};

	&:hover {
		background-color: #b5c9f5a2;
	}
	&:active {
		background-color: royalblue;
	}
`;
