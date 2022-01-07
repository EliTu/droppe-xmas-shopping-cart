export type SortDirection = 'asc' | 'desc';
/**
 * Provide functionality to sort an array of objects by a specific field name and a direction.
 * @param listToSort - the array that will be sorted.
 * @param fieldName - a key in the object of the array to index the comparison value.
 * @param direction - sort direction, @see SortDirection.
 * @returns sorted array.
 * @example sortByField<Product>([{title: 'Cheap chair', price: '2'} , {title: 'Expensive chair', price: 5}], 'price', 'asc') ->
 * [{title: 'Expensive chair', price: 5}, {title: 'Cheap chair', price: '2'}]
 */
function sortByField<TListType>(listToSort: TListType[], fieldName: keyof TListType, direction: SortDirection = 'asc') {
	// clone the passed list to prevent accidental mutation by the Array.sort method
	return [...listToSort].sort((a, b) => {
		if (fieldName in a && fieldName in b) {
			const firstValue = a[fieldName];
			const secondValue = b[fieldName];

			if (typeof firstValue === 'number' && typeof secondValue === 'number') {
				return numberSort(firstValue, secondValue, direction);
			}

			if (typeof firstValue === 'string' && typeof secondValue === 'string') {
				return stringSort(firstValue, secondValue, direction);
			}
		}
		return 0;
	});
}

function numberSort(firstValue: number, secondValue: number, direction: SortDirection) {
	if (firstValue === secondValue) {
		return 0;
	}
	if (direction === 'asc') {
		return firstValue > secondValue ? 1 : -1;
	} else {
		return secondValue > firstValue ? 1 : -1;
	}
}

function stringSort(firstValue: string, secondValue: string, direction: SortDirection) {
	if (firstValue === secondValue) {
		return 0;
	}
	if (direction === 'desc') {
		return firstValue.localeCompare(secondValue);
	} else {
		return secondValue.localeCompare(firstValue);
	}
}

export default sortByField;
