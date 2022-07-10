import AppBar from "Components/AppBar";
import React from "react";
import { ComponentsContainer, MainContainer } from "./styles";

const MainLayout: React.FC<any> = React.forwardRef(
    ({ children, ...props }, ref) => {
        return (
            <MainContainer {...props} ref={ref}>
                <AppBar />
                <ComponentsContainer>{children}</ComponentsContainer>
            </MainContainer>
        );
    }
);

export default MainLayout;
