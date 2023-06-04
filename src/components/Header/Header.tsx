import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setCurrentTextSearch } from '../../redux/slices/currentTextSearchSlice';
import { getSuggestSearch, handleFullSearch } from '../../utils/function';
import SuggestComicList from './SuggestComicList';

let textSearchTimeout: any;
export default function Header() {
    let textSearch = useAppSelector((state) => state.currentTextSearch);
    let filter = useAppSelector((state) => state.filter);
    let sort = useAppSelector((state) => state.sort);
    let [suggestComicData, setSuggestComicData] = useState<any[]>([]);
    let [isInputFocused, setIsInputFocused] = useState<boolean>(false);
    let [suggestLoading, setSuggestLoading] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const classes = useStyles();

    useEffect(() => {
        fetchData()

        // add enter event to input search
        document.getElementById("outlined-input-search")?.addEventListener("keypress", function (event) {
            // If the user presses the "Enter" key on the keyboard
            if (event.key === "Enter") {
                event.preventDefault();
                (document.getElementsByClassName("MuiIconButton-edgeEnd")[0] as HTMLButtonElement)?.click();
            }
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        clearTimeout(textSearchTimeout);
        if (textSearch.length > 0) {
            setSuggestLoading(true);
            textSearchTimeout = setTimeout(() => {
                getDataSuggest();
            }, 2000);
        }
        else {
            setSuggestLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [textSearch]);

    const fetchData = async () => {
        await handleFullSearch(1, "", filter, sort);
    };

    const getDataSuggest = async () => {
        try {
            setSuggestLoading(true);
            let result = await getSuggestSearch(textSearch, filter, 3);

            if (result) {
                let suggestComicData: any[] = Array.from(result.data.data).slice(0, 5);
                console.log("getDataSuggest", suggestComicData, result);
                setSuggestComicData([...suggestComicData]);
            }
        }
        catch (error) {
            console.log("error getDataSuggest", error);
            setSuggestLoading(false);
        }
        finally {
            setSuggestLoading(false);
        }
    };

    const handleChangeInputSearch = (event: any) => {
        dispatch(setCurrentTextSearch(event.target.value));
    };

    const handleSearch = async (event: any) => {
        console.log("Searching với key: ", textSearch);
        document.getElementById("outlined-input-search")?.blur();
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
                    onBlur={() => { setIsInputFocused(false) }}
                    onFocus={() => { setIsInputFocused(true) }}
                    style={{ height: 50 }}
                    autoFocus={false}
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
                    autoComplete="off"
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
                {
                    isInputFocused && textSearch.length > 0 ?
                        <Paper className="suggestComic" elevation={10}>
                            {
                                !suggestLoading && suggestComicData.length > 0 &&
                                <SuggestComicList dataComic={suggestComicData}></SuggestComicList>
                            }
                            {
                                !suggestLoading && suggestComicData.length === 0 &&
                                <span style={{ fontWeight: "bold", fontStyle: "italic", fontSize: 12 }}>Không tìm thấy kết quả</span>
                            }
                            {
                                suggestLoading &&
                                <PulseLoader
                                    loading={true}
                                    speedMultiplier={0.8}
                                    color="#1976D2"
                                    size={10}
                                />
                            }
                        </Paper>
                        :
                        null
                }

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
        position: "relative",
        // display: 'flex',
        // flexDirection: 'column',
        '@media (max-width: 700px)': {
            margin: "0 30px 0 30px",
        },

        "& .suggestComic": {
            position: "absolute",
            top: 'calc(100% + 8px)',
            left: '0',
            width: 'calc(100% - 40px)',
            minHeight: 40,
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            padding: 8,
        }
    },
});