// import { useState, useEffect } from "react";
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";
import Grid from '@mui/material/Grid';
import ComicItem from './ComicItem';
import Pagination from '@mui/material/Pagination';
import { useAppSelector } from '../../redux/hooks';
import { handleFullSearch } from '../../utils/function';

export default function ComicList() {
    const dataComic = useAppSelector((state) => state.comics);
    const totalPage = useAppSelector((state) => state.totalPage);
    let textSearch = useAppSelector((state) => state.currentTextSearch);
    let filter = useAppSelector((state) => state.filter);
    let sort = useAppSelector((state) => state.sort);
    let currentPage = useAppSelector((state) => state.currentPage);
    const classes = useStyles();

    const handleChangePage = async (event: React.ChangeEvent<unknown>, value: number) => {
        // console.log(event);
        console.log(value);
        await handleFullSearch(value, textSearch, filter, sort);
    };

    return (
        <>
            <Paper
                elevation={1}
                className={classes.root}
            >
                <Grid container rowSpacing={4}
                    justifyContent={"flex-start"}
                >
                    {
                        dataComic.length > 0 && dataComic.slice(0, 18).map((item, index) => (
                            <Grid item key={index} xs={12} sm={6} md={3} lg={2} xl={2}>
                                <ComicItem comic={item} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Paper>

            <Paper
                elevation={1}
                className={classes.pagination}
            >
                <Pagination count={totalPage} page={currentPage} variant="outlined" color="primary" showFirstButton showLastButton onChange={handleChangePage} />
            </Paper>
        </>
    );
};


export const useStyles = makeStyles({
    root: {
        background: "#FFFFFF",
        minHeight: 300,
        alignItems: "center",
        padding: "8px 0 8px 0",
    },
    title: {
        marginLeft: 60,
        fontSize: 36,
        fontWeight: "bold",
        fontStyle: "italic",
        backgroundImage: "linear-gradient(45deg, #7a7799, #441d1d)",
        backgroundSize: "100%",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        '@media (max-width: 700px)': {
            marginLeft: 30,
        },
    },
    inputSearchArea: {
        flex: 1,
        margin: "0 30px 0 150px",
        // display: 'flex',
        // flexDirection: 'column',
        '@media (max-width: 700px)': {
            margin: "0 30px 0 30px",
        },
    },
    pagination: {
        background: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 0 8px 0",
        marginTop: 8,
    },
});