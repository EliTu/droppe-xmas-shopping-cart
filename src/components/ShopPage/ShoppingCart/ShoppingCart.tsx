import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Product } from '../../../redux/slices/types';
import { RootState } from '../../../redux/store';
import { SectionContainer, SectionHeaderContainer, SectionHeader } from '../ShopPage.styled';
import { SelectedProduct } from './SelectedProduct';
import { SelectedProductsContainer } from './ShoppingCart.styled';

interface SelectedProductData {
	productData: Product;
	amount: number;
	availableInCarts: number[];
}

function ShoppingCart() {
	const { selectedProductsData, relevantProducts, carts } = useSelector(({ shop }: RootState) => shop);

	const computedProductsList = useMemo(
		() =>
			selectedProductsData.reduce<Record<number, SelectedProductData>>((selectedProductsMap, currentSelectedData) => {
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
				// otherwise, store the selected product data in the map
				const productData = relevantProducts.find(({ id }) => id === productId)!;
				const availableInCarts = carts
					.filter(({ products }) => products.some(({ id }) => id === productId))
					.map(({ id }) => id);

				return {
					...selectedProductsMap,
					[productId]: { productData, availableInCarts, amount: 1 },
				};
			}, {}),
		[selectedProductsData, relevantProducts, carts]
	);

	return (
		<SectionContainer $heightInVh={70}>
			<SectionHeaderContainer>
				<SectionHeader>Your shopping cart:</SectionHeader>
			</SectionHeaderContainer>
			<SelectedProductsContainer>
				{Object.values(computedProductsList).map(({ productData, amount, availableInCarts }) => {
					return (
						<SelectedProduct
							key={productData.id}
							productData={productData}
							availableInCarts={availableInCarts}
							selectionAmount={amount}
						/>
					);
				})}
			</SelectedProductsContainer>
		</SectionContainer>
	);
}

export default ShoppingCart;
