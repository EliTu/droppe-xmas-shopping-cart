import { useEffect } from 'react';
import { MainLayout } from './components/layout';
import GlobalStyles from './GlobalStyles.styled';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './redux/store';
import { getCartsAsync } from './redux/slices/thunks';
import { Status } from './redux/slices/types';
import { ShopPage } from './components/ShopPage';
import { CheckoutPage } from './components/CheckoutPage';
import { useShopStore } from './hooks';

function App() {
	const dispatch = useAppDispatch();
	const { wishListUsers, status } = useShopStore();

	useEffect(() => {
		const userCartIds = wishListUsers.map(user => user.associatedCartId);
		dispatch(getCartsAsync(userCartIds));
	}, []);

	return (
		<Router>
			<GlobalStyles />
			<MainLayout>
				{status === Status.IDLE && (
					<Routes>
						<Route path="/" element={<ShopPage />} />
						<Route path="/checkout" element={<CheckoutPage />} />
					</Routes>
				)}
			</MainLayout>
		</Router>
	);
}

export default App;
