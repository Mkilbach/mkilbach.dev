import React, { Dispatch, SetStateAction } from "react";

type showMailContextType = {
    value: boolean;
    blocked: boolean;
    dispatch: Dispatch<SetStateAction<boolean>>;
    dispatchBlocked: Dispatch<SetStateAction<boolean>>;
};

export const showMailContext = React.createContext<showMailContextType>({
    value: false,
    blocked: false,
    dispatch: () => false,
    dispatchBlocked: () => false,
});

export const ShowMailContextProvider: React.FC<
    React.PropsWithChildren<{ contextData: showMailContextType }>
> = ({ children, contextData }) => {
    return (
        <showMailContext.Provider value={contextData}>
            {children}
        </showMailContext.Provider>
    );
};
