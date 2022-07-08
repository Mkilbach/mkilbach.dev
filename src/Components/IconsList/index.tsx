import {
    StyledIconCaption,
    StyledIconContainer,
    StyledIconsContainer,
    StyledIconWrapper,
    StyledMaskSvgIcon,
    StyledSvgIcon,
} from "./styles";

type IconType = {
    icon: React.FC;
    caption: string;
    href: string;
};

const IconsList: React.FC<{ icons: IconType[] }> = ({ icons }) => {
    return (
        <StyledIconsContainer>
            {icons.map(({ icon, caption, href }) => (
                <StyledIconContainer
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                >
                    <StyledIconWrapper className="icon-wrapper">
                        <StyledSvgIcon component={icon} className="icon" />
                        <StyledMaskSvgIcon
                            component={icon}
                            className="mask-icon"
                        />
                    </StyledIconWrapper>
                    <StyledIconCaption
                        component={"span"}
                        variant="subtitle1"
                        className="caption"
                    >
                        {caption}
                    </StyledIconCaption>
                </StyledIconContainer>
            ))}
        </StyledIconsContainer>
    );
};

export default IconsList;
