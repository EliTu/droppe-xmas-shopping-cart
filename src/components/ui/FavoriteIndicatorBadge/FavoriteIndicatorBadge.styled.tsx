import styled from 'styled-components';

const FavoriteIndicatorBadge = styled.span.attrs<{ amount?: number }>(({ amount }) => ({
	children: `Favorite ${amount && amount > 1 ? `x${amount}` : ''}`,
}))<{ amount?: number }>`
	display: inline-block;
	font-size: 10px;
	padding: 0.2rem;
	color: white;
	background: goldenrod;
	border-radius: 8px;
	margin-inline-start: 0.5rem;
	user-select: none;
`;

export default FavoriteIndicatorBadge;
