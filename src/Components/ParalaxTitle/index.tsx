import { useEffect, useState } from "react";
import { StyledParalaxTitle } from "./styles";

import titleBg from "assets/titleBg.jpeg";

const ParalaxTitle: React.FC<{
    mouseMoveRef: React.RefObject<HTMLElement>;
    text: string;
}> = ({ mouseMoveRef, text }) => {
    const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = ({ pageX, pageY }: MouseEvent) => {
        setBgPosition({ x: pageX, y: pageY });
    };

    useEffect(() => {
        const refElement = mouseMoveRef.current;

        refElement?.addEventListener("mousemove", handleMouseMove);

        return () => {
            refElement?.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseMoveRef]);

    return (
        <StyledParalaxTitle
            variant="h1"
            bgImage={titleBg}
            style={{
                backgroundPosition: `calc(50% - ${
                    bgPosition.x * 0.04
                }px) calc(50% - ${bgPosition.y * 0.04}px)`,
            }}
        >
            {text}
        </StyledParalaxTitle>
    );
};

export default ParalaxTitle;
