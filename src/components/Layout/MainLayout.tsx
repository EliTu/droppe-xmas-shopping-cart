import { ReactNode } from 'react';
import Header from './Header/Header';
import { MainAppLayout } from './Layout.styled';

interface MainLayoutProps {
	children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
	console.log('woo');
	return (
		<MainAppLayout>
			<Header />
			{children}
		</MainAppLayout>
	);
}

export default MainLayout;
