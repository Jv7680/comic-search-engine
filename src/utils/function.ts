import { APICaller } from "../APICaller/APICaller";
import { store } from "../redux/store";
import { setComics } from "../redux/slices/comicsSlice";
import { setTotalPage } from "../redux/slices/totalPageSlice";
import { setCurentPage } from "../redux/slices/currentPageSlice";
import { setIsLoading } from "../redux/slices/isLoadingSlice";
import { incrementCountSearch } from "../redux/slices/countSearchSlice";
import { setTotalResult } from "../redux/slices/totalResultSlice";

export const handleFullSearch = async (page: number, textSearch: string, filter: any, sort: number) => {
    console.log("handleFullSearch", filter);
    let result: any;
    const body = {
        title: textSearch,
        genres: [...filter.genres],
        minRate: filter.minRate,
        maxRate: filter.maxRate,
        minChapterNumber: filter.minimumChapter,
        page: page,
        sortType: sort,
    };
    try {
        store.dispatch(setIsLoading(true));
        result = await APICaller.post("/search", body)
            .then((res) => {
                console.log("res", res);
                if (res) {
                    // console.log("res.data.data", res.data.data);
                    store.dispatch(setComics(res.data.data));
                    store.dispatch(setTotalPage(Math.ceil(res.data.total / 12)));
                    store.dispatch(setCurentPage(page));
                    store.dispatch(setTotalResult(res.data.total));
                    store.dispatch(incrementCountSearch());
                    return res;
                }
            })
            .catch((rej) => {
                console.log("rej in handleFullSearch", rej);
                return false;
            });
    }
    catch (error) {
        console.log("rej in catch", error);
        setTimeout(() => {
            store.dispatch(setIsLoading(false));
        }, 1000);
    }
    finally {
        setTimeout(() => {
            store.dispatch(setIsLoading(false));
        }, 1000);
        return result;
    }
};

export const getSuggestSearch = async (textSearch: string, filter: any, sort: number) => {
    console.log("getSuggestSearch", textSearch);
    let result: any;
    const body = {
        title: textSearch,
        genres: [...filter.genres],
        minRate: filter.minRate,
        maxRate: filter.maxRate,
        minChapterNumber: filter.minimumChapter,
        page: 1,
        sortType: sort,
    };
    try {
        result = await APICaller.post("/search", body)
            .then((res) => {
                if (res) {
                    return res;
                }
            })
            .catch((rej) => {
                console.log("rej in getSuggestSearch", rej);
                return false;
            });
    }
    catch (error) {
        console.log("rej in catch", error);
        return false;
    }
    finally {
        return result;
    }
};