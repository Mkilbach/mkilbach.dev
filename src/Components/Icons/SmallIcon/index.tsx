import React from "react";
import { StyledSmallIcon, StyledSmallIconType } from "./styles";

const SmallIcon: React.ComponentType<StyledSmallIconType> = ({
    component,
    ...props
}) => {
    return <StyledSmallIcon component={component} {...props} />;
};

export default SmallIcon;
