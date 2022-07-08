import {
    StyledIconContainer,
    StyledIconsContainer,
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
                    <StyledSvgIcon component={icon} />
                    <span className="caption">{caption}</span>
                </StyledIconContainer>
            ))}
        </StyledIconsContainer>
    );
};

export default IconsList;
