import { GitHub, LinkedIn } from "@mui/icons-material";
import IconsList from "Components/IconsList";
import TitleContainer from "Layouts/TitleContainer";
import { useRef } from "react";
import ParalaxTitle from "../../Components/ParalaxTitle";
import MainLayout from "../../Layouts/MainLayout";
import { MainContainer } from "./styles";

const iconsList = [
    {
        icon: GitHub,
        caption: "GitHub",
        href: "https://github.com/Mkilbach",
    },
    {
        icon: LinkedIn,
        caption: "LinkedIn",
        href: "https://www.linkedin.com/in/mateusz-kilbach/",
    },
];

const MainPage = () => {
    const ref = useRef<HTMLElement>(null);

    return (
        <MainLayout ref={ref}>
            <MainContainer>
                <TitleContainer
                    title={
                        <ParalaxTitle mouseMoveRef={ref} text="MKILBACH.DEV" />
                    }
                >
                    <IconsList icons={iconsList} />
                </TitleContainer>
            </MainContainer>
        </MainLayout>
    );
};

export default MainPage;
