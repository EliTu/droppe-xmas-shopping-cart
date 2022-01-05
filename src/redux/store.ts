import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { shopSlice } from './slices/shopSlice';

export const store = configureStore({
	reducer: {
		shop: shopSlice.reducer,
	},
	devTools: true,
});

// type inference
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>(); // typed dispatch hook
