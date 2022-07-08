import { SvgIcon, SvgIconProps } from "@mui/material";
import { styled } from "@mui/system";

export type StyledSmallIconType = SvgIconProps & { component: React.FC };

export const StyledSmallIcon = styled(SvgIcon)({
    width: "2rem",
    height: "2rem",
    margin: "1rem",
    cursor: "pointer",
    transition: "color .3s ease-in-out",
}) as React.ComponentType<StyledSmallIconType>;
