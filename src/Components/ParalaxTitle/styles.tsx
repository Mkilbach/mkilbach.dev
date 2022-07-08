import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { theme } from "../../utils/theme";

export const StyledParalaxTitle = styled(Typography, {
    shouldForwardProp: props => props !== "bgImage",
})<{
    bgImage?: string;
}>(
    ({
        bgImage = "https://as2.ftcdn.net/v2/jpg/02/93/05/45/1000_F_293054544_FRHpSMD4K7QsAwr9QQcisVe3acQvhgNm.jpg",
    }) => ({
        color: "#fff",
        fontSize: "5rem",
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
        transition: "background-position .2s ease-out",

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
    })
);

export const StyledParalaxTitleContainer = styled("div")({
    zIndex: 0,
    position: "relative",
});
