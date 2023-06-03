import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initState: number = 3;

const sortSlice = createSlice({
    name: 'sort',
    initialState: initState,
    reducers: {
        setSort: (state, action: PayloadAction<number>) => {
            state = action.payload;
            return state;
        },
    },
})

export const { setSort } = sortSlice.actions;
export default sortSlice.reducer;