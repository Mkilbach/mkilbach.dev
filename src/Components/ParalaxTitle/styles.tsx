import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { theme } from "../../utils/theme";

export const StyledParalaxTitle = styled(Typography, {
    shouldForwardProp: props => props !== "bgPosition",
})<{
    bgPosition: { x: number; y: number };
}>(({ bgPosition }) => ({
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
        "url('https://as1.ftcdn.net/v2/jpg/03/16/98/68/1000_F_316986838_y06VmSn2t0yix5orZ4HRTKnrIKOyzVIo.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `calc(50% - ${bgPosition.x * 0.02}px) calc(50% - ${
        bgPosition.y * 0.02
    }px)`,

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
}));
