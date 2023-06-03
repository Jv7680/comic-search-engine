import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setCurrentTextSearch } from '../../redux/slices/currentTextSearchSlice';
import { handleFullSearch } from '../../utils/function';

export default function Header() {
    let textSearch = useAppSelector((state) => state.currentTextSearch);
    let filter = useAppSelector((state) => state.filter);
    let sort = useAppSelector((state) => state.sort);
    const dispatch = useAppDispatch();
    const classes = useStyles();

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchData = async () => {
        await handleFullSearch(1, "", filter, sort);
    };

    const handleChangeInputSearch = (event: any) => {
        dispatch(setCurrentTextSearch(event.target.value));
    };

    const handleSearch = async (event: any) => {
        console.log("Searching với key: ", textSearch);

        await handleFullSearch(1, textSearch, filter, sort);
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
                // sx={{
                //     "& .MuiOutlinedInput-notchedOutline": {
                //         borderColor: "#000000",
                //     },
                //     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                //         borderColor: "#523747",
                //     },
                //     "&.Mui-focused input": {
                //         color: "#523747"
                //     },
                //     "&:hover .MuiOutlinedInput-notchedOutline": {
                //         borderColor: "yellow"
                //     },
                //     "& input": {
                //         fontFamily: "VT323",
                //         fontSize: 20,
                //     }
                // }}
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