import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initState: number = 1;

const totalPageSlice = createSlice({
    name: 'totalPage',
    initialState: initState,
    reducers: {
        setTotalPage: (state, action: PayloadAction<number>) => {
            state = action.payload;
            return state;
        },
    },
})

export const { setTotalPage } = totalPageSlice.actions;
export default totalPageSlice.reducer;