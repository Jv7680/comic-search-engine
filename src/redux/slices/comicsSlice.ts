import { createSlice } from '@reduxjs/toolkit';

export interface ComicElement {
    avatar: string;
    title: string;
    chapterNumber: string;
    genres: string | string[];
    languages: string;
    status: string;
    numberOfViews: string;
    numberOfReviews: string;
    rating: string;
}

const initState: any[] = [];

const comicsSlice = createSlice({
    name: 'comics',
    initialState: initState,
    reducers: {
        setComics: (state, action: any) => {
            state = [...action.payload];
            return state;
        },
        clearComics: (state) => {
            state = [];
            return state;
        },
    },
    extraReducers: (builder) => {
        // builder
        // .addCase(gameOver, (state) => {
        //     state = initState;
        //     return state;
        // })
    },
})

export const { setComics, clearComics } = comicsSlice.actions;
export default comicsSlice.reducer;