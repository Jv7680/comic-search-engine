import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initState: number = 0;

const totalResultSlice = createSlice({
    name: 'totalResult',
    initialState: initState,
    reducers: {
        setTotalResult: (state, action: PayloadAction<number>) => {
            state = action.payload;
            return state;
        },
    },
})

export const { setTotalResult } = totalResultSlice.actions;
export default totalResultSlice.reducer;