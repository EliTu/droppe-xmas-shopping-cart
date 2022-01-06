import styled from 'styled-components';
import { FlexRowDiv } from '../../../../../GlobalStyles.styled';

export const ProductContainer = styled(FlexRowDiv)`
	height: 8rem;
	border: 1px solid #8a8a8abc;
`;

export const ProductImageContainer = styled(FlexRowDiv)`
	height: 100%;
	width: 8rem;
	justify-content: center;
	padding: 0.5rem 1rem;
	border-right: 1px solid #8a8a8abc;
`;

export const ProductImage = styled.img`
	height: 100%;
`;
