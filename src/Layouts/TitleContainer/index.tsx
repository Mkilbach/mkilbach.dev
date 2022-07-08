import React from "react";
import { StyledChildrenContainer, StyledTitleContainer, StyledDivider } from "./styles";

const TitleContainer: React.FC<
    React.PropsWithChildren<{ title: React.ReactNode }>
> = ({ children, title }) => {
    return (
        <>
            <StyledTitleContainer>{title}</StyledTitleContainer>
            <StyledDivider />
            <StyledChildrenContainer>{children}</StyledChildrenContainer>
        </>
    );
};

export default TitleContainer;
