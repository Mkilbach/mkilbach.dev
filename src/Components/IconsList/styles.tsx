import { SvgIcon } from "@mui/material";
import { styled } from "@mui/system";

export const StyledIconsContainer = styled("div")({});

export const StyledIconContainer = styled("a")({
    cursor: "pointer",
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",

    "&:hover": {
        "& .caption": {
            opacity: 1,
        },
    },

    "& .caption": {
        transition: "opacity .5s",
        opacity: 0,
    },
});

export const StyledSvgIcon = styled(SvgIcon)<{ component: React.FC }>({
    width: "5rem",
    height: "5rem",
    marginBottom: ".5rem",
});
