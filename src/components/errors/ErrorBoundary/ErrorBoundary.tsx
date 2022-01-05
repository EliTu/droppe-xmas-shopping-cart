import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorPageContainer } from './ErrorBoundary.styled';

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

// catch any error from down the app components tree and display a fallback error page
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	public state: ErrorBoundaryState = {
		hasError: false,
	};

	public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Uncaught error:', error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return (
				<ErrorPageContainer>
					<h1>Oops, something went terribly wrong :/</h1>
					<h2>We're sorry!</h2>
					<h3>Try to refresh the page and try again!</h3>
				</ErrorPageContainer>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
