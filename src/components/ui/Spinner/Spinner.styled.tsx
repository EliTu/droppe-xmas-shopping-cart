import styled, { keyframes } from 'styled-components';

/* styles and animations credited to loading.io/css/ */

const ldsEllipsis1Animation = keyframes`
	0% {
		transform: scale(0);
		opacity: 0.2;
	}
	100% {
		transform: scale(1);
	}
`;
const ldsEllipsis3Animation = keyframes`
	0% {
		transform: scale(1);
	}
	100% {
		transform: scale(0);
		opacity: 0.2;
	}
`;
const ldsEllipsis2Animation = keyframes`
	0% {
		transform: translate(0, 0);
	}
	100% {
		transform: translate(24px, 0);
	}
}
`;

export const SpinnerContainer = styled.div<{ $color: string; $size: number }>`
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;

	& div {
		position: absolute;
		top: 33px;
		width: ${props => props.$size}px;
		height: ${props => props.$size}px;
		border-radius: 50%;
		background: ${props => props.$color};
		animation-timing-function: cubic-bezier(0, 1, 1, 0);

		&:nth-child(1) {
			left: 8px;
			animation: ${ldsEllipsis1Animation} 0.7s infinite;
		}
		&:nth-child(2) {
			left: 8px;
			animation: ${ldsEllipsis2Animation} 0.7s infinite;
		}
		&:nth-child(3) {
			left: 32px;
			animation: ${ldsEllipsis2Animation} 0.7s infinite;
		}
		&:nth-child(4) {
			left: 56px;
			animation: ${ldsEllipsis3Animation} 0.7s infinite;
		}
	}
`;
