import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";

export default function Footer() {
    const classes = useStyles();

    return (
        <Paper
            elevation={0}
            square
            className={classes.root}
        >
            <div className={classes.title}>
                Nhóm 11
            </div>
        </Paper>
    );
};

const useStyles = makeStyles({
    root: {
        background: "linear-gradient(45deg, #000000, #37224e)",
        minHeight: 100,
        display: "flex",
        alignItems: "center",
        marginTop: 16,
    },
    title: {
        marginLeft: 60,
        fontSize: 36,
        fontWeight: "bold",
        fontStyle: "italic",
        backgroundImage: "linear-gradient(45deg, #7a7799, #9d5c5c)",
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