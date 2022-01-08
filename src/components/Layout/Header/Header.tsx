import { useLocation } from 'react-router-dom';
import { HeaderContainer, MainTitle, NavLinksContainer, StyledLink, TitleContainer } from './Header.styled';

function Header() {
	const title = 'Droppe XMAS';
	const { pathname } = useLocation();

	const navLinkList = [
		{
			to: '/',
			label: 'Shop',
		},
		{
			to: '/checkout',
			label: 'Checkout',
		},
	];

	return (
		<HeaderContainer>
			<TitleContainer>
				<MainTitle>{title}</MainTitle>
			</TitleContainer>
			<NavLinksContainer>
				{navLinkList.map(({ label, to }) => (
					<StyledLink to={to} key={label} isActive={pathname === to}>
						{label}
					</StyledLink>
				))}
			</NavLinksContainer>
		</HeaderContainer>
	);
}

export default Header;
