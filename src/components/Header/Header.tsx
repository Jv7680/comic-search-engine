import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useState } from "react";
import { makeStyles } from "@mui/styles";

export default function Header() {
    const [textSearch, setTextSearch] = useState<string>("");
    const classes = useStyles();

    const handleChangeInputSearch = (event: any) => {
        setTextSearch(event.target.value);
    };

    const handleSearch = (event: any) => {
        console.log("Searching");
    };

    return (
        <Paper
            elevation={0}
            square
            className={classes.root}
        >
            <div className={classes.title}>
                TimTruyenOnline
            </div>
            <div className={classes.inputSearchArea}>
                <OutlinedInput
                    id="outlined-input-search"
                    type="text"
                    value={textSearch}
                    onChange={handleChangeInputSearch}
                    onBlur={() => { }}
                    style={{ height: 50 }}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleSearch}
                                edge="end"
                            >
                                <SearchOutlinedIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    color="secondary"
                    fullWidth
                    placeholder="Tìm kiếm"
                />
            </div>
        </Paper>
    );
};

const useStyles = makeStyles({
    root: {
        background: "linear-gradient(45deg, #e66465, #9198e5)",
        minHeight: 100,
        display: "flex",
        alignItems: "center",
        marginBottom: 16,
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
});