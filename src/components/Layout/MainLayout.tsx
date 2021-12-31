import { ReactNode } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { ContentContainer, MainAppLayout } from './Layout.styled';

interface MainLayoutProps {
	children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
	console.log('woo');
	return (
		<MainAppLayout>
			<Header />
			<ContentContainer>{children}</ContentContainer>
			<Footer />
		</MainAppLayout>
	);
}

export default MainLayout;
