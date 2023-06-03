import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Rating } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setFilterGenres, setFilterMinRate, setFilterMinimumChapter } from '../../redux/slices/filterSlice';
import { handleFullSearch } from '../../utils/function';

export default function ComicFilter() {
    const classes = useStyles();
    const dispatch = useAppDispatch();

    let textSearch = useAppSelector((state) => state.currentTextSearch);
    let filter = useAppSelector((state) => state.filter);
    let sort = useAppSelector((state) => state.sort);

    useEffect(() => {
        handleFullSearch(1, textSearch, filter, sort);
        console.log("filter.genres", filter.genres);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter]);

    const handleChangeMinChapter = (event: any) => {
        dispatch(setFilterMinimumChapter(+event.target.value));
    };

    const handleChangeRating = (event: any) => {
        // setSelectedStatus(event.target.value);
        console.log(event.target.value);
        dispatch(setFilterMinRate(+event.target.value));
    };

    const handleChangeGenres = (event: any) => {
        const { value, checked } = event.target;
        if (checked) {
            if (value === "Tất cả") {
                dispatch(setFilterGenres([]));
            }
            else {
                dispatch(setFilterGenres([...filter.genres, value]));
            }
        } else {
            dispatch(setFilterGenres(filter.genres.filter((item) => item !== value)));
        }

        console.log("value checked", value, checked);
    };

    return (
        <Paper
            elevation={2}
            className={classes.root}
        >
            <div className={classes.title}>
                <FilterAltOutlinedIcon fontSize='inherit' /> Bộ lọc tìm kiếm
            </div>

            <div className={classes.filterItem}>
                Số chương tối thiểu
            </div>
            <FormGroup style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <FormControlLabel value={0} control={<Checkbox checked={filter.minimumChapter === 0} onChange={handleChangeMinChapter} />} label="Tất cả" style={{ flexBasis: "100%" }} />
                <FormControlLabel value={100} control={<Checkbox checked={filter.minimumChapter === 100} onChange={handleChangeMinChapter} />} label="100" />
                <FormControlLabel value={300} control={<Checkbox checked={filter.minimumChapter === 300} onChange={handleChangeMinChapter} />} label="300" />
                <FormControlLabel value={500} control={<Checkbox checked={filter.minimumChapter === 500} onChange={handleChangeMinChapter} />} label="500" />
                <FormControlLabel value={700} control={<Checkbox checked={filter.minimumChapter === 700} onChange={handleChangeMinChapter} />} label="700" />
            </FormGroup>

            <Divider></Divider>

            <div className={classes.filterItem}>
                Đánh giá tối thiểu
            </div>
            <FormGroup style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <FormControlLabel value={1} control={<Checkbox checked={filter.minRate === 1} onChange={handleChangeRating} />} label="Tất cả" style={{ flexBasis: "100%" }} />
                <FormControlLabel value={2} control={<Checkbox checked={filter.minRate === 2} onChange={handleChangeRating} />} label={<Rating size="medium" readOnly value={2} />} style={{ flexBasis: "100%" }} />
                <FormControlLabel value={3} control={<Checkbox checked={filter.minRate === 3} onChange={handleChangeRating} />} label={<Rating size="medium" readOnly value={3} />} style={{ flexBasis: "100%" }} />
                <FormControlLabel value={4} control={<Checkbox checked={filter.minRate === 4} onChange={handleChangeRating} />} label={<Rating size="medium" readOnly value={4} />} style={{ flexBasis: "100%" }} />
            </FormGroup>

            <Divider></Divider>

            <div className={classes.filterItem}>
                Thể loại
            </div>
            <FormGroup style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <FormControlLabel value={"Tất cả"} control={<Checkbox checked={filter.genres.length === 0} onChange={handleChangeGenres} />} label="Tất cả" style={{ flexBasis: "100%" }} />
                <FormControlLabel value={"Action"} control={<Checkbox checked={filter.genres.includes('Action')} onChange={handleChangeGenres} />} label="Action" />
                <FormControlLabel value={"Adult"} control={<Checkbox checked={filter.genres.includes('Adult')} onChange={handleChangeGenres} />} label="Adult" />
                <FormControlLabel value={"Adventure"} control={<Checkbox checked={filter.genres.includes('Adventure')} onChange={handleChangeGenres} />} label="Adventure" />
                <FormControlLabel value={"Anime"} control={<Checkbox checked={filter.genres.includes('Anime')} onChange={handleChangeGenres} />} label="Anime" />
                <FormControlLabel value={"Comedy"} control={<Checkbox checked={filter.genres.includes('Comedy')} onChange={handleChangeGenres} />} label="Comedy" />
                <FormControlLabel value={"Comic"} control={<Checkbox checked={filter.genres.includes('Comic')} onChange={handleChangeGenres} />} label="Comic" />
                <FormControlLabel value={"Cooking"} control={<Checkbox checked={filter.genres.includes('Cooking')} onChange={handleChangeGenres} />} label="Cooking" />
                <FormControlLabel value={"Doujinshi"} control={<Checkbox checked={filter.genres.includes('Doujinshi')} onChange={handleChangeGenres} />} label="Doujinshi" />
                <FormControlLabel value={"Drama"} control={<Checkbox checked={filter.genres.includes('Drama')} onChange={handleChangeGenres} />} label="Drama" />
                <FormControlLabel value={"Ecchi"} control={<Checkbox checked={filter.genres.includes('Ecchi')} onChange={handleChangeGenres} />} label="Ecchi" />
                <FormControlLabel value={"Fantasy"} control={<Checkbox checked={filter.genres.includes('Fantasy')} onChange={handleChangeGenres} />} label="Fantasy" />
                <FormControlLabel value={"Harem"} control={<Checkbox checked={filter.genres.includes('Harem')} onChange={handleChangeGenres} />} label="Harem" />
                <FormControlLabel value={"Manga"} control={<Checkbox checked={filter.genres.includes('Manga')} onChange={handleChangeGenres} />} label="Manga" />
                <FormControlLabel value={"Manhua"} control={<Checkbox checked={filter.genres.includes('Manhua')} onChange={handleChangeGenres} />} label="Manhua" />
                <FormControlLabel value={"Manhwa"} control={<Checkbox checked={filter.genres.includes('Manhwa')} onChange={handleChangeGenres} />} label="Manhwa" />
                <FormControlLabel value={"Romance"} control={<Checkbox checked={filter.genres.includes('Romance')} onChange={handleChangeGenres} />} label="Romance" />
                <FormControlLabel value={"Sports"} control={<Checkbox checked={filter.genres.includes('Sports')} onChange={handleChangeGenres} />} label="Sports" />
            </FormGroup>
        </Paper>
    );
};


export const useStyles = makeStyles({
    root: {
        background: "#FFFFFF",
        maxWidth: 1366,
        minHeight: 300,
        padding: 8,

        "& .MuiFormControlLabel-root": {
            height: 30,
            minWidth: 130,
        },
        "& .MuiDivider-root": {
            margin: "8px 0 8px 0",
        },
        "& .MuiFormControlLabel-label": {
            fontSize: 14,
            userSelect: "none",
        },
        "& .MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label": {
            display: "flex",
            alignItems: "center",
        },
        "& .MuiRating-icon.MuiRating-iconEmpty": {
            display: "none",
        },
    },
    title: {
        marginBottom: 10,
        fontSize: 18,
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",

    },
    filterItem: {
        marginBottom: 8,
        fontSize: 14,
        fontWeight: "bold",
    },
});