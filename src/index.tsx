import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { ErrorBoundary } from './components/errors/ErrorBoundary';
import { store } from './redux/store';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<ErrorBoundary>
			<StoreProvider store={store}>
				<App />
			</StoreProvider>
		</ErrorBoundary>
	</React.StrictMode>,
	document.getElementById('root')
);
