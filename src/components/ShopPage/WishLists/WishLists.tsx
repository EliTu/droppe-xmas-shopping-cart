import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { Option, Select } from '../../ui/Select';
import { SingleWishList } from './SingleWishList';
import {
	WishListHeaderControlsContainer,
	WishListsContainer,
	WishListsHeaderContainer,
	WishListsSectionContainer,
} from './WishLists.styled';

export enum SortOptions {
	NAME = 'name',
	MOST_EXPENSIVE = 'price_asc',
	CHEAPEST = 'price_desc',
}

const selectOptions: Option[] = [
	{
		value: SortOptions.NAME,
		label: 'Name',
		isDefault: true,
	},
	{
		value: SortOptions.CHEAPEST,
		label: 'Cheapest',
	},
	{
		value: SortOptions.MOST_EXPENSIVE,
		label: 'Most expensive',
	},
];

function WishLists() {
	const [sortParameter, setSortParameter] = useState(SortOptions.NAME);
	const { wishListUsers, carts } = useSelector(({ shop }: RootState) => shop);
	const numberOfCarts = carts.length;

	const computedTitle = useMemo(() => {
		if (numberOfCarts === 0) return 'No Wish Lists available currently:';
		if (numberOfCarts === 1) return 'There is one Wish List available:';
		return `There are ${numberOfCarts} Wish Lists available:`;
	}, [numberOfCarts]);

	const handleSortSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = e.target.value as SortOptions;
		setSortParameter(prevParameter => (prevParameter !== selectedValue ? selectedValue : prevParameter));
	};

	return (
		<WishListsSectionContainer>
			<WishListsHeaderContainer>
				<h3>{computedTitle}</h3>
				<WishListHeaderControlsContainer>
					<Select options={selectOptions} name="sort" onChange={handleSortSelectChange} />
				</WishListHeaderControlsContainer>
			</WishListsHeaderContainer>
			<WishListsContainer>
				{carts.map(cartData => {
					const wishListOwner = wishListUsers.find(user => user.associatedCartId === cartData.id)!;
					return (
						<SingleWishList
							key={cartData.id}
							cartData={cartData}
							WishListOwner={wishListOwner}
							sortParameter={sortParameter}
						/>
					);
				})}
			</WishListsContainer>
		</WishListsSectionContainer>
	);
}

export default WishLists;
