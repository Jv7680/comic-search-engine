import { APICaller } from "../APICaller/APICaller";
import { store } from "../redux/store";
import { setComics } from "../redux/slices/comicsSlice";
import { setTotalPage } from "../redux/slices/totalPageSlice";
import { setCurentPage } from "../redux/slices/currentPageSlice";
import { setIsLoading } from "../redux/slices/isLoadingSlice";

export const handleFullSearch = async (page: number, textSearch: string, filter: any, sort: number) => {
    console.log("handleFullSearch", filter);
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
        APICaller.post("/search", body)
            .then((res) => {
                console.log("res", res);
                if (res) {
                    // console.log("res.data.data", res.data.data);
                    store.dispatch(setComics(res.data.data));
                    store.dispatch(setTotalPage(Math.ceil(res.data.total / 12)));
                    store.dispatch(setCurentPage(page));
                }
            })
            .catch((rej) => {
                console.log("rej in handleFullSearch", rej);
            });
    }
    catch (error) {
        console.log("rej in catch", error);
        store.dispatch(setIsLoading(false));
    }
    finally {
        store.dispatch(setIsLoading(false));
    }
};