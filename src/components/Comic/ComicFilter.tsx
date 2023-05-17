import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";

export default function ComicFilter() {
    const classes = useStyles();
    const [selectedMinChapter, setSelectedMinChapter] = useState<number>(0);
    const [selectedStatus, setSelectedStatus] = useState<string>("Tất cả");
    const [selectedGenres, setSelectedGenres] = useState<string[]>(["Tất cả"]);

    useEffect(() => {
        // console.log("selectedGenres", selectedGenres);
    });

    const handleChangeMinChapter = (event: any) => {
        setSelectedMinChapter(+event.target.value);
    };

    const handleChangeStatus = (event: any) => {
        setSelectedStatus(event.target.value);
        console.log(event.target.value);
    };

    const handleChangeGenres = (event: any) => {
        const { value, checked } = event.target;
        if (checked) {
            if (value === "Tất cả") {
                setSelectedGenres([value]);
            }
            else {
                setSelectedGenres([...selectedGenres, value].filter((item) => item !== "Tất cả"));
            }
        } else {
            setSelectedGenres(selectedGenres.filter((item) => item !== value));
        }

        console.log("value checked", value, checked);
    };

    return (
        <Paper
            elevation={2}
            className={classes.root}
        >
            <div className={classes.title}>
                <FilterAltOutlinedIcon fontSize='inherit' /> Bộ lọc tìm kiếm
            </div>

            <div className={classes.filterItem}>
                Số chương tối thiểu
            </div>
            <FormGroup style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <FormControlLabel value={0} control={<Checkbox checked={selectedMinChapter === 0} onChange={handleChangeMinChapter} />} label="Tất cả" style={{ flexBasis: "100%" }} />
                <FormControlLabel value={100} control={<Checkbox checked={selectedMinChapter === 100} onChange={handleChangeMinChapter} />} label="100" />
                <FormControlLabel value={300} control={<Checkbox checked={selectedMinChapter === 300} onChange={handleChangeMinChapter} />} label="300" />
                <FormControlLabel value={500} control={<Checkbox checked={selectedMinChapter === 500} onChange={handleChangeMinChapter} />} label="500" />
                <FormControlLabel value={700} control={<Checkbox checked={selectedMinChapter === 700} onChange={handleChangeMinChapter} />} label="700" />
            </FormGroup>

            <Divider></Divider>

            <div className={classes.filterItem}>
                Trạng thái
            </div>
            <FormGroup style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <FormControlLabel value={"Tất cả"} control={<Checkbox checked={selectedStatus === "Tất cả"} onChange={handleChangeStatus} />} label="Tất cả" style={{ flexBasis: "100%" }} />
                <FormControlLabel value={"Hoàn thành"} control={<Checkbox checked={selectedStatus === "Hoàn thành"} onChange={handleChangeStatus} />} label="Hoàn thành" />
                <FormControlLabel value={"Đang tiến hành"} control={<Checkbox checked={selectedStatus === "Đang tiến hành"} onChange={handleChangeStatus} />} label="Đang tiến hành" />
            </FormGroup>

            <Divider></Divider>

            <div className={classes.filterItem}>
                Thể loại
            </div>
            <FormGroup style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <FormControlLabel value={"Tất cả"} control={<Checkbox checked={selectedGenres.includes('Tất cả')} onChange={handleChangeGenres} />} label="Tất cả" style={{ flexBasis: "100%" }} />
                <FormControlLabel value={"Action"} control={<Checkbox checked={selectedGenres.includes('Action')} onChange={handleChangeGenres} />} label="Action" />
                <FormControlLabel value={"Adult"} control={<Checkbox checked={selectedGenres.includes('Adult')} onChange={handleChangeGenres} />} label="Adult" />
                <FormControlLabel value={"Adventure"} control={<Checkbox checked={selectedGenres.includes('Adventure')} onChange={handleChangeGenres} />} label="Adventure" />
                <FormControlLabel value={"Anime"} control={<Checkbox checked={selectedGenres.includes('Anime')} onChange={handleChangeGenres} />} label="Anime" />
                <FormControlLabel value={"Chuyển sinh"} control={<Checkbox checked={selectedGenres.includes('Chuyển sinh')} onChange={handleChangeGenres} />} label="Chuyển sinh" />
                <FormControlLabel value={"Comedy"} control={<Checkbox checked={selectedGenres.includes('Comedy')} onChange={handleChangeGenres} />} label="Comedy" />
                <FormControlLabel value={"Comic"} control={<Checkbox checked={selectedGenres.includes('Comic')} onChange={handleChangeGenres} />} label="Comic" />
                <FormControlLabel value={"Cooking"} control={<Checkbox checked={selectedGenres.includes('Cooking')} onChange={handleChangeGenres} />} label="Cooking" />
                <FormControlLabel value={"Cổ đại"} control={<Checkbox checked={selectedGenres.includes('Cổ đại')} onChange={handleChangeGenres} />} label="Cổ đại" />
                <FormControlLabel value={"Doujinshi"} control={<Checkbox checked={selectedGenres.includes('Doujinshi')} onChange={handleChangeGenres} />} label="Doujinshi" />
                <FormControlLabel value={"Drama"} control={<Checkbox checked={selectedGenres.includes('Drama')} onChange={handleChangeGenres} />} label="Drama" />
                <FormControlLabel value={"Đam mỹ"} control={<Checkbox checked={selectedGenres.includes('Đam mỹ')} onChange={handleChangeGenres} />} label="Đam mỹ" />
                <FormControlLabel value={"Ecchi"} control={<Checkbox checked={selectedGenres.includes('Ecchi')} onChange={handleChangeGenres} />} label="Ecchi" />
                <FormControlLabel value={"Fantasy"} control={<Checkbox checked={selectedGenres.includes('Fantasy')} onChange={handleChangeGenres} />} label="Fantasy" />
                <FormControlLabel value={"Harem"} control={<Checkbox checked={selectedGenres.includes('Harem')} onChange={handleChangeGenres} />} label="Harem" />
                <FormControlLabel value={"Manga"} control={<Checkbox checked={selectedGenres.includes('Manga')} onChange={handleChangeGenres} />} label="Manga" />
                <FormControlLabel value={"Manhua"} control={<Checkbox checked={selectedGenres.includes('Manhua')} onChange={handleChangeGenres} />} label="Manhua" />
                <FormControlLabel value={"Manhwa"} control={<Checkbox checked={selectedGenres.includes('Manhwa')} onChange={handleChangeGenres} />} label="Manhwa" />
                <FormControlLabel value={"Romance"} control={<Checkbox checked={selectedGenres.includes('Romance')} onChange={handleChangeGenres} />} label="Romance" />
                <FormControlLabel value={"Sports"} control={<Checkbox checked={selectedGenres.includes('Sports')} onChange={handleChangeGenres} />} label="Sports" />
            </FormGroup>
        </Paper>
    );
};


export const useStyles = makeStyles({
    root: {
        background: "#FFFFFF",
        maxWidth: 1366,
        minHeight: 300,
        padding: 8,

        "& .MuiFormControlLabel-root": {
            height: 30,
            minWidth: 130,
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
        marginBottom: 10,
        fontSize: 18,
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",

    },
    filterItem: {
        marginBottom: 8,
        fontSize: 14,
        fontWeight: "bold",
    },
});