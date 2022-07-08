import MainIcon from "Components/Icons/MainIcon";
import { StyledIconsContainer } from "./styles";

type IconType = {
    icon: React.FC;
    caption: string;
    href: string;
};

const IconsList: React.FC<{ icons: IconType[] }> = ({ icons }) => {
    return (
        <StyledIconsContainer>
            {icons.map(({ icon, caption, href }) => (
                <MainIcon
                    key={href}
                    icon={icon}
                    caption={caption}
                    href={href}
                />
            ))}
        </StyledIconsContainer>
    );
};

export default IconsList;
