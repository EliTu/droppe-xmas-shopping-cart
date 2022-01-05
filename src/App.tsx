import MainLayout from './components/Layout/MainLayout';
import GlobalStyles from './GlobalStyles.styled';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RootState, useAppDispatch } from './redux/store';
import { getCartsAsync } from './redux/slices/thunks';
import { useSelector } from 'react-redux';

function App() {
	const users = useSelector(({ shop }: RootState) => shop.wishListUsers);
	const userCartIds = users.map(user => user.associatedCartId);
	const dispatch = useAppDispatch();
	dispatch(getCartsAsync(userCartIds));

	return (
		<>
			<GlobalStyles />
			<Router>
				<MainLayout>
					<Routes>
						<Route path="/" element={<div>Wish List Carts</div>} />
						<Route path="/browse-items" element={<div>Browse Items</div>} />
					</Routes>
				</MainLayout>
			</Router>
		</>
	);
}

export default App;
