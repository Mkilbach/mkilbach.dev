import { useRef } from "react";
import ParalaxTitle from "../../Components/ParalaxTitle";
import MainLayout from "../../Layouts/MainLayout";
import { MainContainer } from "./styles";

const MainPage = () => {
    const ref = useRef<HTMLElement>(null);

    return (
        <MainLayout ref={ref}>
            <MainContainer>
                <ParalaxTitle mouseMoveRef={ref} text="MKILBACH.DEV" />
            </MainContainer>
        </MainLayout>
    );
};

export default MainPage;
