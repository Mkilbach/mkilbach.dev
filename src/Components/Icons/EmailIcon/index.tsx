import { Drafts, Mail } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { showMailContext } from "Context/showMailContext";
import { useContext } from "react";
import SmallIcon from "../SmallIcon";

const EmailIcon = () => {
    const {
        value: isOpen,
        blocked,
        dispatch: setIsOpen,
    } = useContext(showMailContext);

    return (
        <IconButton disabled={blocked} onClick={() => setIsOpen(x => !x)}>
            <SmallIcon icon={isOpen ? Drafts : Mail} />
        </IconButton>
    );
};

export default EmailIcon;
