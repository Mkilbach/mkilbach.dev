import { useEffect, useState } from "react";
import { StyledParalaxTitle } from "./styles";

const ParalaxTitle: React.FC<
    React.PropsWithChildren<{
        mouseMoveRef: React.RefObject<HTMLElement>;
    }>
> = ({ mouseMoveRef, children }) => {
    const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = ({ pageX, pageY }: MouseEvent) => {
        setBgPosition({ x: pageX, y: pageY });
    };

    useEffect(() => {
        mouseMoveRef.current?.addEventListener("mousemove", handleMouseMove);

        return () => {
            mouseMoveRef.current?.removeEventListener(
                "mousemove",
                handleMouseMove
            );
        };
    }, [mouseMoveRef]);

    return (
        <StyledParalaxTitle variant="h1" bgPosition={bgPosition}>
            {children}
        </StyledParalaxTitle>
    );
};

export default ParalaxTitle;
