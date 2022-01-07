import { ReactNode } from 'react';
import { StyledButton } from './Button.styled';

interface Button extends React.HTMLProps<HTMLButtonElement> {
	children: ReactNode;
	disabled?: boolean;
}

function Button({ children, disabled, onClick }: Button) {
	return (
		<StyledButton onClick={onClick} disabled={disabled}>
			{children}
		</StyledButton>
	);
}

export default Button;
