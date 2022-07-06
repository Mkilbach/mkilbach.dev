import { styled } from "@mui/system";
import { theme } from "../../utils/theme";

export const Container = styled("div")({
    backgroundColor: theme.palette.backgroundPrimary.main,
    padding: "5rem",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
    position: 'relative'
});
