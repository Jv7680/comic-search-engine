import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initState: number = 1;

const currentPageSlice = createSlice({
    name: 'curentPage',
    initialState: initState,
    reducers: {
        setCurentPage: (state, action: PayloadAction<number>) => {
            state = action.payload;
            return state;
        },
    },
})

export const { setCurentPage } = currentPageSlice.actions;
export default currentPageSlice.reducer;