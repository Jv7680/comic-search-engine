import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
    minimumChapter: number;
    minRate: number;
    maxRate: number;
    genres: string[];
};

const initState: FilterState = {
    minimumChapter: 0,
    minRate: 1,
    maxRate: 5,
    genres: [],
};

const filterSlice = createSlice({
    name: 'filter',
    initialState: initState,
    reducers: {
        setFilter: (state, action: any) => {
            state = action.payload;
            return state;
        },
        setFilterMinimumChapter: (state, action: PayloadAction<number>) => {
            state.minimumChapter = action.payload;
            return state;
        },
        setFilterMinRate: (state, action: PayloadAction<number>) => {
            state.minRate = action.payload;
            return state;
        },
        setFilterMaxRate: (state, action: PayloadAction<number>) => {
            state.maxRate = action.payload;
            return state;
        },
        setFilterGenres: (state, action: PayloadAction<string[]>) => {
            state.genres = [...action.payload];
            return state;
        },
    },
})

export const { setFilter, setFilterMinimumChapter, setFilterMinRate, setFilterMaxRate, setFilterGenres } = filterSlice.actions;
export default filterSlice.reducer;