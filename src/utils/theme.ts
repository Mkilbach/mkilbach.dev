import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

declare module "@mui/material/styles" {
    interface Theme {
        status: {
            danger: React.CSSProperties["color"];
        };
    }
    interface ThemeOptions {
        status?: {
            danger?: React.CSSProperties["color"];
        };
    }
    interface Palette {
        backgroundPrimary: Palette["primary"];
    }
    interface PaletteOptions {
        backgroundPrimary?: PaletteOptions["primary"];
    }
}

export const theme = createTheme({
    palette: {
        primary: {
            light: "#edfaff",
            main: "#d9effa",
            dark: "#a4d9eb",
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: "#a3d8ea",
            main: "#6cc7e2",
            dark: "#00b4d5",
            // contrastText: will be calculated to contrast with palette.secondary.main
        },
        backgroundPrimary: {
            main: "#012E40",
        },
    },
    status: {
        danger: orange[500],
    },
});
