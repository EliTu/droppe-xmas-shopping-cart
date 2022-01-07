import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Product } from '../../../redux/slices/types';
import { RootState } from '../../../redux/store';
import { SectionContainer, SectionHeaderContainer, SectionHeader } from '../ShopPage.styled';
import { SelectedProductsContainer } from './ShoppingCart.styled';

interface SelectedProduct {
	productData: Product;
	amount: number;
	availableInCarts: number[];
}

function ShoppingCart() {
	const { wishListUsers, selectedProductsData, relevantProducts, carts } = useSelector(({ shop }: RootState) => shop);

	const computedProductsList = useMemo(
		() =>
			selectedProductsData.reduce<Record<number, SelectedProduct>>((selectedProductsMap, currentSelectedData) => {
				const productId: number = currentSelectedData.productId;

				// if a product already exists in the map, increment his amount
				if (selectedProductsMap[currentSelectedData.productId]) {
					return {
						...selectedProductsMap,
						[productId]: {
							...selectedProductsMap[productId],
							amount: selectedProductsMap[productId].amount + 1,
						},
					};
				}
				const productData = relevantProducts.find(product => product.id === productId)!;
				const availableInCarts = carts
					.filter(cart => cart.products.some(product => product.id === currentSelectedData.productId))
					.map(cart => cart.id);
				return { ...selectedProductsMap, [productId]: { productData, availableInCarts, amount: 1 } };
			}, {}),
		[wishListUsers, selectedProductsData, relevantProducts, carts]
	);
	console.log(computedProductsList);

	return (
		<SectionContainer $height={70}>
			<SectionHeaderContainer>
				<SectionHeader>Your shopping cart:</SectionHeader>
			</SectionHeaderContainer>
			<SelectedProductsContainer></SelectedProductsContainer>
		</SectionContainer>
	);
}

export default ShoppingCart;
