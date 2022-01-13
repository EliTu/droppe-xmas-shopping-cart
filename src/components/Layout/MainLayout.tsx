import { ReactNode } from 'react';
import { useShopStore } from '../../hooks';
import { Status } from '../../redux/slices/types';
import { Header } from './Header';
import { ContentContainer, FullPageLoader, MainAppLayout } from './Layout.styled';

interface MainLayoutProps {
	children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
	const { status } = useShopStore();
	return (
		<MainAppLayout>
			<Header />
			<ContentContainer>{status === Status.LOADING ? <FullPageLoader /> : children}</ContentContainer>
		</MainAppLayout>
	);
}

export default MainLayout;
