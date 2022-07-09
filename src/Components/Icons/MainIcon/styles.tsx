import { SvgIcon, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { theme } from "utils/theme";

export const StyledIconContainer = styled("a")({
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "2rem",
    height: "4rem",
    margin: "1rem 1.5rem",
    color: theme.palette.primary.main,

    [theme.breakpoints.up("sm")]: {
        width: "3rem",
        height: "5rem",
        margin: "1rem 2rem",
    },
    [theme.breakpoints.up("md")]: {
        width: "5rem",
        height: "8rem",
        margin: "1rem 3rem",
    },

    "& .caption": {
        transition: "opacity .5s",
        opacity: 1,

        [theme.breakpoints.up("md")]: {
            opacity: 0,
        },
    },

    "&:hover": {
        [theme.breakpoints.up("md")]: {
            "& .caption": {
                opacity: 1,
            },
            "& .icon-wrapper": {
                width: "6rem",
                height: "6rem",
            },
        },

        "& .mask-icon": {
            clipPath: "circle(100%)",
        },
    },
});

export const StyledSvgIcon = styled(SvgIcon)<{ component: React.FC }>({
    width: "100%",
    height: "100%",
});

export const StyledMaskSvgIcon = styled(SvgIcon)<{ component: React.FC }>({
    width: "100%",
    height: "100%",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    clipPath: "circle(10% at 0 100%)",
    transition: "clip-path .5s ease-in-out",
    color: theme.palette.secondary.main,
});

export const StyledIconWrapper = styled("div")({
    position: "relative",
    width: "2.5rem",
    height: "2.5rem",
    transition: "width .3s, height .3s",

    [theme.breakpoints.up("sm")]: {
        width: "4rem",
        height: "4rem",
    },
    [theme.breakpoints.up("md")]: {
        width: "5rem",
        height: "5rem",
    },
});

export const StyledIconCaption = styled(Typography)<{ component: string }>({
    fontFamily: "'Kanit', sans-serif",
});
