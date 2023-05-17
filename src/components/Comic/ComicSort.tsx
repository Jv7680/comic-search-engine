import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";
import { useState } from "react";

export default function ComicSort() {
    const classes = useStyles();
    const [selectedSort, setSelectedSort] = useState<string>("Tên");

    const handleChangeSort = (event: any) => {
        setSelectedSort(event.target.value);
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
                <FormControlLabel value={"Tên"} control={<Checkbox checked={selectedSort === "Tên"} onChange={handleChangeSort} />} label="Tên" />
                <FormControlLabel value={"Lượt xem nhiều"} control={<Checkbox checked={selectedSort === "Lượt xem nhiều"} onChange={handleChangeSort} />} label="Lượt xem nhiều" />
                <FormControlLabel value={"Đánh giá cao"} control={<Checkbox checked={selectedSort === "Đánh giá cao"} onChange={handleChangeSort} />} label="Đánh giá cao" />
            </FormGroup>
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

    },
    filterItem: {
        marginBottom: 8,
        fontSize: 14,
        fontWeight: "bold",
    },
});