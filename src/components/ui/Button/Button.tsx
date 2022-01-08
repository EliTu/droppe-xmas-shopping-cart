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
	fontSize?: number;
}

function Button({ children, disabled, onClick, type = ButtonTypes.DEFAULT, fontSize = 13 }: Button) {
	return (
		<StyledButton onClick={onClick} disabled={Boolean(disabled)} $type={type} $fontSize={fontSize}>
			{children}
		</StyledButton>
	);
}

export default Button;
