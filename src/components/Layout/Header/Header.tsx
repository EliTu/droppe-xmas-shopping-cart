import { HeaderContainer, MainTitle, TitleContainer } from './Header.styled';

function Header() {
	const title = 'Droppe XMAS';
	return (
		<HeaderContainer>
			<TitleContainer>
				<MainTitle>{title}</MainTitle>
			</TitleContainer>
		</HeaderContainer>
	);
}

export default Header;
