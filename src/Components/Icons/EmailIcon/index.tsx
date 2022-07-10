import { useCallback, useContext, useEffect, useState } from "react";
import { Drafts, Mail } from "@mui/icons-material";
import { Alert, IconButton, Snackbar } from "@mui/material";
import { showMailContext } from "Context/showMailContext";
import copy from "copy-to-clipboard";
import SmallIcon from "../SmallIcon";

const EmailIcon = () => {
    const {
        value: isOpen,
        blocked,
        dispatch: setIsOpen,
    } = useContext(showMailContext);

    const [snackBarOpen, setSnackBarOpen] = useState(false);

    const handleIconClick = () => {
        setIsOpen(x => !x);
    };

    const copyMailToClipboard = useCallback(() => {
        if (!isOpen) return;

        copy("mkilbach@gmail.com");
        setSnackBarOpen(true);
    }, [isOpen]);

    useEffect(() => {
        copyMailToClipboard();
    }, [isOpen, copyMailToClipboard]);

    const handleSnackbarClose = () => setSnackBarOpen(false);

    return (
        <>
            <IconButton disabled={blocked} onClick={handleIconClick}>
                <SmallIcon
                    component={isOpen ? Drafts : Mail}
                    color={blocked ? "disabled" : "secondary"}
                />
            </IconButton>
            <Snackbar
                open={snackBarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    Email copied to your clipboard!
                </Alert>
            </Snackbar>
        </>
    );
};

export default EmailIcon;
