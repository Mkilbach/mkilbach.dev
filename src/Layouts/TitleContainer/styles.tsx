import { styled, keyframes } from "@mui/system";

const slideUp = keyframes`
  to {
    top: 0;
    transform: translate(0, 0);
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

export const StyledTitleContainer = styled("div")({
    position: "relative",
    top: "50%",
    animation: `${slideUp} 1.5s ease-in-out 1s forwards`,
    transform: "translate(0, -50%)",
});

export const StyledChildrenContainer = styled("div")({
    opacity: "0",
    color: "white",
    animation: `${show} .5s ease-in-out 2.2s forwards`,
});

export const StyledDivider = styled("div")({
    height: "1px",
    width: "0",
    backgroundColor: "white",
    margin: "2rem auto",
    animation: `${setWidth} .5s ease-in-out 2.2s forwards`,
});
