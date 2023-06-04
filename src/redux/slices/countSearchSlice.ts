import { createSlice } from '@reduxjs/toolkit';

const initState: number = -3;

const countSearchSlice = createSlice({
    name: 'countSearch',
    initialState: initState,
    reducers: {
        incrementCountSearch: (state) => {
            return ++state;
        },
    },
})

export const { incrementCountSearch } = countSearchSlice.actions;
export default countSearchSlice.reducer;