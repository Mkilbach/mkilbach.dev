import { useContext, useEffect, useRef, useState } from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";
import IconsList from "Components/IconsList";
import { showMailContext } from "Context/showMailContext";
import TitleContainer from "Layouts/TitleContainer";
import { swapText } from "utils/swapText";
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
    const { value: isOpen, dispatchBlocked } = useContext(showMailContext);
    const [titleText, setTitleText] = useState("MKILBACH.DEV");
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        dispatchBlocked(true);
        swapText(
            titleText,
            isOpen ? "MKILBACH@GMAIL.COM" : "MKILBACH.DEV",
            setTitleText
        );

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    useEffect(() => {
        if (
            (isOpen && titleText === "MKILBACH@GMAIL.COM") ||
            (!isOpen && titleText === "MKILBACH.DEV")
        )
            dispatchBlocked(false);
    }, [dispatchBlocked, isOpen, titleText]);

    return (
        <MainLayout ref={ref}>
            <MainContainer>
                <TitleContainer
                    title={<ParalaxTitle mouseMoveRef={ref} text={titleText} />}
                >
                    <IconsList icons={iconsList} />
                </TitleContainer>
            </MainContainer>
        </MainLayout>
    );
};

export default MainPage;
