import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initState: string = "";

const currentTextSearchSlice = createSlice({
    name: 'currentTextSearchSlice',
    initialState: initState,
    reducers: {
        setCurrentTextSearch: (state, action: PayloadAction<string>) => {
            state = action.payload;
            return state;
        },
    },
})

export const { setCurrentTextSearch } = currentTextSearchSlice.actions;
export default currentTextSearchSlice.reducer;