import { styled, keyframes } from "@mui/system";
import { theme } from "utils/theme";

const slideUp = keyframes`
  to {
    top: 0%;
    transform: translate(-50%, 0%);
  }
`;

const show = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 100%;
  }
`;

const setWidth = keyframes`
  from {
    width: 0
  }

  to {
    width: 100%;
  }
`;

export const StyledWrapper = styled("div")({
    position: "relative",
});

export const StyledTitleWrapper = styled("div")({
    height: `125px`,
});

export const StyledTitleContainer = styled("div")({
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    animation: `${slideUp} 1.5s ease-in-out 1s forwards`,
});

export const StyledChildrenContainer = styled("div")({
    opacity: "0",
    animation: `${show} .5s ease-in-out 2.5s forwards`,
});

export const StyledDivider = styled("div")({
    height: "1px",
    width: "0",
    backgroundColor: theme.palette.primary.main,
    margin: "2rem auto",
    animation: `${setWidth} .5s ease-in-out 2.2s forwards`,
});
