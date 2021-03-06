import { useMemo, useState, useCallback } from 'react';
import { CheckboxGroup, CheckboxItem } from '../../ui/CheckboxGroup/';
import { Option, Select } from '../../ui/Select';
import { SingleWishList } from './SingleWishList';
import { SectionContainer, SectionHeaderContainer, SectionHeader } from '../ShopPage.styled';
import { WishListHeaderControlsContainer, WishListsContainer } from './WishLists.styled';
import { useShopStore } from '../../../hooks';

export enum SortFields {
	TITLE_DESC = 'title_desc',
	TITLE_ASC = 'title_asc',
	MOST_EXPENSIVE = 'price_desc',
	CHEAPEST = 'price_asc',
}

const selectOptions: Option[] = [
	{
		value: SortFields.TITLE_DESC,
		label: 'Product Title - A-Z',
	},
	{
		value: SortFields.TITLE_ASC,
		label: 'Product Title - Z-A',
	},
	{
		value: SortFields.CHEAPEST,
		label: 'Cheapest',
	},
	{
		value: SortFields.MOST_EXPENSIVE,
		label: 'Most expensive',
	},
];

function WishLists() {
	const [sortParameter, setSortParameter] = useState(SortFields.TITLE_DESC);
	const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

	const { wishListUsers, carts } = useShopStore();
	const numberOfCarts = carts.length;

	const computedTitle = useMemo(() => {
		if (numberOfCarts === 0) return 'No Wish Lists available currently:';
		if (numberOfCarts === 1) return 'There is one Wish List available:';
		return `There are ${numberOfCarts} Wish Lists available:`;
	}, [numberOfCarts]);

	const handleSortSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = e.target.value as SortFields;
		setSortParameter(prevParameter => (prevParameter !== selectedValue ? selectedValue : prevParameter));
	};

	const handleFavoriteCheckboxChange = useCallback(
		() => setShowFavoritesOnly(prevChecked => !prevChecked),
		[setShowFavoritesOnly]
	);

	const checkboxItems: CheckboxItem[] = useMemo(
		() => [
			{
				label: 'Show favorite products only',
				name: 'favorites',
				isChecked: showFavoritesOnly,
				onChange: handleFavoriteCheckboxChange,
			},
		],
		[showFavoritesOnly]
	);

	return (
		<SectionContainer>
			<SectionHeaderContainer>
				<SectionHeader>{computedTitle}</SectionHeader>
				<WishListHeaderControlsContainer>
					<Select
						options={selectOptions}
						name="sort"
						onChange={handleSortSelectChange}
						outerLabel="Sort list products:"
					/>
					<CheckboxGroup items={checkboxItems} />
				</WishListHeaderControlsContainer>
			</SectionHeaderContainer>
			<WishListsContainer>
				{carts.map(cartData => {
					const wishListOwner = wishListUsers.find(user => user.associatedCartId === cartData.id)!;
					return (
						<SingleWishList
							key={cartData.id}
							cartData={cartData}
							WishListOwner={wishListOwner}
							sortParameter={sortParameter}
							showFavoritesOnly={showFavoritesOnly}
						/>
					);
				})}
			</WishListsContainer>
		</SectionContainer>
	);
}

export default WishLists;
