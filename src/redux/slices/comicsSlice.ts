import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initComics } from '../initComicsData';

export interface ComicElement {
    avatar: string;
    title: string;
    chapterNumber: string;
    genres: string;
    languages: string;
    status: string;
    numberOfViews: string;
    numberOfReviews: string;
    rating: string;
}

const initState: ComicElement[] = [...initComics];

const comicsSlice = createSlice({
    name: 'comics',
    initialState: initState,
    reducers: {
        setComics: (state, action: PayloadAction<ComicElement[]>) => {
            state = [...action.payload];
        },
        clearComics: (state) => {
            state = [];
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