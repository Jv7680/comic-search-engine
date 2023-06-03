import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import comicsReducer from './slices/comicsSlice';
import isLoadingReducer from './slices/isLoadingSlice';
import currentPageReducer from './slices/currentPageSlice';
import totalPageReducer from './slices/totalPageSlice';
import currentTextSearchReducer from './slices/currentTextSearchSlice';
import sortReducer from './slices/sortSlice';
import filterReducer from './slices/filterSlice';

export const store = configureStore({
    reducer: {
        comics: comicsReducer,
        isLoading: isLoadingReducer,
        currentPage: currentPageReducer,
        totalPage: totalPageReducer,
        currentTextSearch: currentTextSearchReducer,
        sort: sortReducer,
        filter: filterReducer,
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
