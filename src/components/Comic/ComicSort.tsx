import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSort } from '../../redux/slices/sortSlice';
import { handleFullSearch } from '../../utils/function';
import { useEffect } from 'react';

export default function ComicSort() {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    let textSearch = useAppSelector((state) => state.currentTextSearch);
    let filter = useAppSelector((state) => state.filter);
    let sort = useAppSelector((state) => state.sort);
    let countSearch = useAppSelector((state) => state.countSearch);
    let totalResult = useAppSelector((state) => state.totalResult);

    useEffect(() => {
        handleFullSearch(1, textSearch, filter, sort);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort]);

    const handleChangeSort = (event: any) => {
        dispatch(setSort(+event.target.value));
    };

    return (
        <Paper
            elevation={2}
            className={classes.root}
        >
            <div className={classes.title}>
                Sắp xếp theo
            </div>
            {/* <FormControl> */}
            <FormGroup style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <FormControlLabel value={3} control={<Checkbox checked={sort === 3} onChange={handleChangeSort} />} label="Lượt xem nhiều" />
                <FormControlLabel value={5} control={<Checkbox checked={sort === 5} onChange={handleChangeSort} />} label="Được đánh giá nhiều" />
                <FormControlLabel value={7} control={<Checkbox checked={sort === 7} onChange={handleChangeSort} />} label="Đánh giá cao" />
            </FormGroup>
            {
                countSearch > 0 &&
                <div className={classes.totalComic}>
                    Đã tìm thấy {totalResult} kết quả
                </div>
            }
        </Paper>
    );
};


export const useStyles = makeStyles({
    root: {
        background: "#FFFFFF",
        minHeight: 40,
        padding: 8,
        marginBottom: 8,
        display: "flex",
        alignItems: "center",
        position: 'relative',

        "& .MuiFormControlLabel-root": {
            height: 30,
            // minWidth: 150,
        },
        "& .MuiDivider-root": {
            margin: "8px 0 8px 0",
        },
        "& .MuiFormControlLabel-label": {
            fontSize: 14,
            userSelect: "none",
        },
    },
    title: {
        // marginBottom: 10,
        fontSize: 18,
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        borderRight: "2px solid #cbcbcb",
        minWidth: 120,
        marginRight: 30,
        marginLeft: 8,

    },
    totalComic: {
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "italic",
        display: "flex",
        alignItems: "center",
        minWidth: 120,
        marginRight: 30,
        marginLeft: 8,
        position: 'absolute',
        top: '0',
        right: '0',
        height: '100%',
    },
    filterItem: {
        marginBottom: 8,
        fontSize: 14,
        fontWeight: "bold",
    },
});