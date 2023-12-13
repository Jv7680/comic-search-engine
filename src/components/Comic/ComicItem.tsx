// import { useState, useEffect } from "react";
import { StarBorderOutlined } from "@mui/icons-material";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Rating from '@mui/material/Rating';
import { makeStyles } from "@mui/styles";

interface ComicItemProps {
    comic: any;
};

export default function ComicItem(props: ComicItemProps) {
    const { comic } = props;
    const classes = useStyles();

    const formatGenres = (genres: []) => {
        return genres.toString().replaceAll(",", " - ");
    };

    const handleImageError = (event: any) => {
        event.target.src = "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/39213531/39213531-1696148640414-3b7e3f7beafa5.jpg";
    };

    return (
        <div className={classes.root}>
            <div className={classes.imageArea}>
                <img src={comic._source.avatar} alt="notFound" onError={handleImageError} style={{ cursor: "pointer" }} />
                <div>
                    <span>
                        &ensp;
                        {comic._source.rating}
                        &nbsp;
                        <Rating
                            name="read-only"
                            value={+comic._source.rating}
                            precision={0.1}
                            readOnly
                            size="small"
                            emptyIcon={
                                <StarBorderOutlined fontSize="inherit" style={{ color: "#FFFFFF" }} />
                            }
                        />
                    </span>
                    <span>
                        &ensp;<VisibilityOutlinedIcon fontSize="inherit" />&nbsp;{comic._source.numberOfViews}
                    </span>
                </div>
            </div>
            <div className={classes.descriptionArea}>
                <span className="title">
                    {comic._source.title}
                </span>
                <br />
                <span className="chapterNumber">
                    <span className="label">Đến chương:</span> {comic._source.chapterNumber}
                </span>
                <br />

                <span className="languages">
                    <span className="label">Ngôn ngữ:</span> {comic._source.languages || "Việt Nam"}
                </span>
                <br />
                <span className="numberOfReviews">
                    <span className="label">Lượt đánh giá:</span> {comic._source.numberOfReviews}
                </span>
                <br />
                <span className="status">
                    <span className="label">Trạng thái:</span> {comic._source.status || "Đang tiến hành"}
                </span>
                <br />
                <span className="genres">
                    <span className="label">Thể loại:</span> {formatGenres(comic._source.genres)}
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