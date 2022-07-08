import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { theme } from "../../utils/theme";

export const Title = styled(Typography)({
    color: "#fff",
    fontSize: "5rem",
    fontWeight: "bold",
    position: "relative",
    display: "inline-block",
    textTransform: "uppercase",
    padding: "1rem",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundImage:
        "url('https://as1.ftcdn.net/v2/jpg/03/81/13/08/1000_F_381130880_ZeV9XYzjKj6ATzzcelnbxPUR0yO937OS.jpg')",

    "&:before, &:after": {
        position: "absolute",
        content: "''",
    },

    "&:before": {
        zIndex: -2,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundImage: "inherit",
    },

    "&:after": {
        position: "absolute",
        zIndex: -1,
        top: ".125em",
        right: ".125em",
        bottom: ".125em",
        left: ".125em",
        backgroundColor: theme.palette.backgroundPrimary.main,
    },
});

export const MainContainer = styled("div")({
    width: "50rem",
    maxWidth: "100%",
    textAlign: "center",
});
