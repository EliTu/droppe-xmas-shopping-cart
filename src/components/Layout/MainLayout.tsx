import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Status } from '../../redux/slices/types';
import { RootState } from '../../redux/store';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { ContentContainer, FullPageLoader, MainAppLayout } from './Layout.styled';

interface MainLayoutProps {
	children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
	const { status } = useSelector(({ shop }: RootState) => shop);
	return (
		<MainAppLayout>
			<Header />
			<ContentContainer>{status === Status.LOADING ? <FullPageLoader /> : children}</ContentContainer>
			<Footer />
		</MainAppLayout>
	);
}

export default MainLayout;
