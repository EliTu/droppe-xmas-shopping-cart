import { ReactNode } from 'react';
import { StyledButton } from './Button.styled';

export enum ButtonTypes {
	DEFAULT = 'default',
	DANGER = 'danger',
	CONFIRM = 'confirm',
}

interface Button extends React.HTMLProps<HTMLButtonElement> {
	children: ReactNode;
	disabled?: boolean;
	type?: ButtonTypes;
}

function Button({ children, disabled, onClick, type = ButtonTypes.DEFAULT }: Button) {
	return (
		<StyledButton onClick={onClick} disabled={disabled} $type={type}>
			{children}
		</StyledButton>
	);
}

export default Button;
