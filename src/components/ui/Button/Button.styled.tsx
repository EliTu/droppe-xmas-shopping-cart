import styled from 'styled-components';

enum ButtonTypes {
	DEFAULT = 'default',
	DANGER = 'danger',
	CONFIRM = 'confirm',
}
interface TypeStyle {
	background: string;
	color: string;
	hover: {
		background: string;
	};
	active: {
		background: string;
	};
}

const TYPE_STYLE_MAP: Record<ButtonTypes, TypeStyle> = {
	[ButtonTypes.DEFAULT]: {
		background: 'white',
		color: 'initial',
		hover: {
			background: 'deepskyblue',
		},
		active: {
			background: 'white',
		},
	},
	[ButtonTypes.CONFIRM]: {
		background: 'navy',
		color: 'white',
		hover: {
			background: 'royalblue',
		},
		active: {
			background: 'dodgerblue',
		},
	},
	[ButtonTypes.DANGER]: {
		background: 'crimson',
		color: 'white',
		hover: {
			background: 'darkred',
		},
		active: {
			background: 'pink',
		},
	},
};

export const StyledButton = styled.button<{ $type: ButtonTypes; $fontSize: number; disabled: boolean }>`
	background-color: ${props => TYPE_STYLE_MAP[props.$type].background};
	color: ${props => TYPE_STYLE_MAP[props.$type].color};
	width: 100%;
	min-height: 2.5rem;
	cursor: ${props => (!props.disabled ? 'pointer' : 'unset')};
	font-size: ${props => props.$fontSize}px;
	transition: all 0.2s ease;
	display: flex;
	align-items: center;
	justify-content: center;
	pointer-events: ${props => (props.disabled ? 'none' : 'unset')};
	opacity: ${props => (props.disabled ? '0.2' : 'unset')};

	&:hover {
		background-color: ${props => !props.disabled && TYPE_STYLE_MAP[props.$type].hover.background};
	}

	&:active {
		background-color: ${props => !props.disabled && TYPE_STYLE_MAP[props.$type].active.background};
	}
`;
