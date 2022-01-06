import React from 'react';
import { Product } from '../../../../../redux/slices/types';
import { ProductContainer, ProductImage, ProductImageContainer } from './WishListProduct.styled';

interface WishListProductProps {
	productData: Product;
}

function WishListProduct({ productData }: WishListProductProps) {
	return (
		<ProductContainer>
			<ProductImageContainer>
				<ProductImage alt="Product image" src={productData.image} />
			</ProductImageContainer>
		</ProductContainer>
	);
}

export default WishListProduct;
