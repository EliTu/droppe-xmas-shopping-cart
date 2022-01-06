import { ReactNode } from 'react';
import { StyledButton } from './Button.styled';

interface Button {
	children: ReactNode;
}

function Button({ children }: Button) {
	return <StyledButton>{children}</StyledButton>;
}

export default Button;
