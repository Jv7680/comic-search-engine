// import { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/styles";
import SuggestComicItem from './SuggestComicItem';
import Divider from '@mui/material/Divider';

interface SuggestComicListProps {
    dataComic: any[];
};

export default function SuggestComicList(props: SuggestComicListProps) {
    let dataComic = props.dataComic;

    return (
        <Grid container rowSpacing={0}
            justifyContent={"flex-start"}
        >
            {
                dataComic.length > 0 && dataComic.map((item, index) => (
                    <div key={index} style={{ width: "100%" }}>
                        <Grid item key={index} xs={12} sm={12} md={12} lg={12} xl={12}>
                            <SuggestComicItem comic={item} />
                        </Grid>
                        {
                            index !== dataComic.length - 1 &&
                            <Divider sx={{ width: "100%", borderWidth: 1, margin: "12px 0 12px 0" }} />
                        }
                    </div>
                ))
            }
        </Grid>
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