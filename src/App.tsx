import MainLayout from './components/Layout/MainLayout';
import GlobalStyles from './GlobalStyles.styled';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
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
