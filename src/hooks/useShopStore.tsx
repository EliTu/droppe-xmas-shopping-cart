import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

/**
 * A simple abstraction for the redux store selector of the shop state data
 * @returns Shop store state
 */
function useShopStore() {
	return useSelector(({ shop }: RootState) => shop);
}

export default useShopStore;
