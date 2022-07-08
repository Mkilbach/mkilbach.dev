import { SvgIcon } from "@mui/material";
import { styled } from "@mui/system";
import { theme } from "utils/theme";

export const StyledSmallIcon = styled(SvgIcon)<{ component: React.FC }>({
    width: "2rem",
    height: "2rem",
    margin: "1rem",
    color: theme.palette.primary.main,
    cursor: "pointer",
});
