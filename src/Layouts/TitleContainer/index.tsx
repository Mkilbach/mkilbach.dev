import React from "react";
import {
    StyledChildrenContainer,
    StyledTitleContainer,
    StyledDivider,
    StyledTitleWrapper,
    StyledWrapper,
} from "./styles";

const TitleContainer: React.FC<
    React.PropsWithChildren<{ title: React.ReactNode }>
> = ({ children, title }) => {
    return (
        <StyledWrapper>
            <StyledTitleWrapper>
                <StyledTitleContainer>{title}</StyledTitleContainer>
            </StyledTitleWrapper>
            <StyledDivider />
            <StyledChildrenContainer>{children}</StyledChildrenContainer>
        </StyledWrapper>
    );
};

export default TitleContainer;
