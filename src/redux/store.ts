import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import comicsReducer from './slices/comicsSlice';
import isLoadingReducer from './slices/isLoadingSlice';

export const store = configureStore({
    reducer: {
        comics: comicsReducer,
        isLoading: isLoadingReducer,
    },
});

export type AppDispatch = typeof store.dispatch;

// get the redux state structure
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
