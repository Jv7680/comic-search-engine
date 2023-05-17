// import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { ComicElement } from "../../redux/slices/comicsSlice";
import Rating from '@mui/material/Rating';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { StarBorderOutlined } from "@mui/icons-material";

interface ComicItemProps {
    comic: ComicElement;
};

export default function ComicItem(props: ComicItemProps) {
    const { comic } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.imageArea}>
                <img src={comic.avatar} alt="notFound" />
                <div>
                    <span>
                        &ensp;
                        {comic.rating}
                        &nbsp;
                        <Rating
                            name="read-only"
                            value={+comic.rating}
                            precision={0.1}
                            readOnly
                            size="small"
                            emptyIcon={
                                <StarBorderOutlined fontSize="inherit" style={{ color: "#FFFFFF" }} />
                            }
                        />
                    </span>
                    <span>
                        &ensp;<VisibilityOutlinedIcon fontSize="inherit" />&nbsp;{comic.numberOfViews}
                    </span>
                </div>
            </div>
            <div className={classes.descriptionArea}>
                <span className="title">
                    {comic.title}
                </span>
                <br />
                <span className="chapterNumber">
                    <span className="label">Đến chương:</span> {comic.chapterNumber}
                </span>
                <br />

                <span className="languages">
                    <span className="label">Ngôn ngữ:</span> {comic.languages}
                </span>
                <br />
                <span className="numberOfReviews">
                    <span className="label">Đánh giá:</span> {comic.numberOfReviews}
                </span>
                <br />
                <span className="status">
                    <span className="label">Trạng thái:</span> {comic.status}
                </span>
                <br />
                <span className="genres">
                    <span className="label">Thể loại:</span> {comic.genres}
                </span>
            </div>
        </div>
    );
};


export const useStyles = makeStyles({
    root: {
        width: "100%",
        // border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    imageArea: {
        position: "relative",
        width: "90%",
        paddingTop: "120%",
        borderRadius: 4,
        overflow: "hidden",

        "& img": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
        },
        "& div": {
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            display: "flex",
            flexDirection: "column-reverse",
            color: "#FFFFFF",
            backgroundColor: "#4a4848bf",
            "& span": {
                display: "flex",
                alignItems: "center",
            }
        }
    },
    descriptionArea: {
        width: "90%",
        minHeight: 100,
        fontSize: 14,
        fontStyle: "italic",

        "& .label": {
            fontWeight: 600,
        },
        "& .title": {
            fontSize: 18,
            fontWeight: 600,
            display: "inline-block",
            marginBottom: 6,
            fontStyle: "initial",
        },
    },
});