import React from "react";
import { Container } from "./styles";

const MainLayout: React.FC<any> = React.forwardRef(
    ({ children, ...props }, ref) => {
        return (
            <Container {...props} ref={ref}>
                {children}
            </Container>
        );
    }
);

export default MainLayout;
