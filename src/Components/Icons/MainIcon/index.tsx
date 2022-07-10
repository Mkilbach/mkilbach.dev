import React from "react";
import {
    StyledIconCaption,
    StyledIconContainer,
    StyledIconWrapper,
    StyledMaskSvgIcon,
    StyledSvgIcon,
} from "./styles";

const MainIcon: React.FC<{ href: string; icon: React.FC; caption: string }> = ({
    href,
    icon,
    caption,
}) => {
    return (
        <StyledIconContainer
            key={href}
            href={href}
            target="_blank"
            rel="noreferrer"
        >
            <StyledIconWrapper className="icon-wrapper">
                <StyledSvgIcon component={icon} className="icon" />
                <StyledMaskSvgIcon component={icon} className="mask-icon" />
            </StyledIconWrapper>
            <StyledIconCaption
                component={"span"}
                variant="subtitle1"
                className="caption"
            >
                {caption}
            </StyledIconCaption>
        </StyledIconContainer>
    );
};

export default MainIcon;
