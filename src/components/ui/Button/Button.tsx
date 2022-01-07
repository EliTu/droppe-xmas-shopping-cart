import { ReactNode } from 'react';
import { StyledButton } from './Button.styled';

interface Button {
	children: ReactNode;
	disabled?: boolean;
}

function Button({ children, disabled }: Button) {
	return <StyledButton disabled={disabled}>{children}</StyledButton>;
}

export default Button;
