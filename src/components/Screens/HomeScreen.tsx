// import { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import ComicFilter from "../Comic/ComicFilter";
import ComicList from "../Comic/ComicList";
import ComicSort from "../Comic/ComicSort";

export default function HomeScreen() {

    return (
        <>
            <Grid container columnSpacing={1}
                justifyContent={"flex-start"}
                style={{ padding: "0 16px 0 16px" }}
            >
                <Grid item xs={2} sm={2} md={2} lg={2}>
                    <ComicFilter />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                    <ComicSort />
                    <ComicList />
                </Grid>
            </Grid>

        </>
    );
};