import styled from 'styled-components';
import { ButtonTypes } from './Button';

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

export const StyledButton = styled.button<{ $type: ButtonTypes }>`
	background-color: ${props => TYPE_STYLE_MAP[props.$type].background};
	color: ${props => TYPE_STYLE_MAP[props.$type].color};
	width: 90%;
	height: 2.5rem;
	cursor: pointer;
	font-size: 13px;
	transition: all 0.2s ease;

	&:hover {
		background-color: ${props => TYPE_STYLE_MAP[props.$type].hover.background};
	}

	&:active {
		background-color: ${props => TYPE_STYLE_MAP[props.$type].active.background};
	}
`;
