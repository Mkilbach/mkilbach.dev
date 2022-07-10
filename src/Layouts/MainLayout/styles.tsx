import { styled } from "@mui/system";
import { theme } from "../../utils/theme";

export const MainContainer = styled("div")({
    backgroundColor: theme.palette.backgroundPrimary.main,
    padding: "2rem",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    width: "100vw",

    [theme.breakpoints.up("sm")]: {
        padding: "3rem",
    },
    [theme.breakpoints.up("md")]: {
        padding: "5rem",
    },
});

export const ComponentsContainer = styled("div")({
    maxWidth: "100%",
});
