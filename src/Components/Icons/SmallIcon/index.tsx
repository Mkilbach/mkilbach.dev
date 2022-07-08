import React from "react";
import { StyledSmallIcon } from "./styles";

const SmallIcon: React.FC<{ icon: React.FC }> = ({ icon }) => {
    return <StyledSmallIcon component={icon} />;
};

export default SmallIcon;
