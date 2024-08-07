import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { theme } from "../../utils/theme";

export const StyledParalaxTitle = styled(Typography, {
    shouldForwardProp: props => props !== "bgImage",
})<{
    bgImage?: string;
}>(({ bgImage }) => ({
    color: "#fff",
    fontSize: "1.8rem",
    fontWeight: "bold",
    position: "relative",
    display: "inline-block",
    fontFamily: "'Kanit', sans-serif",
    textTransform: "uppercase",
    padding: "1rem",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "150%",
    transition: "background-position .3s ease-out",

    [theme.breakpoints.up("sm")]: {
        fontSize: "3rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "5rem",
    },

    "@-moz-document url-prefix()": {
        transition: "none",
    },

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
        backgroundRepeat: "inherit",
        backgroundPosition: "inherit",
        backgroundSize: "inherit",
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
}));

export const StyledParalaxTitleContainer = styled("div")({
    zIndex: 0,
    position: "relative",
});
