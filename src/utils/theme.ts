import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

declare module "@mui/material/styles" {
    interface Theme {
        status: {
            danger: React.CSSProperties['color'];
        };
    }
    interface ThemeOptions {
        status?: {
            danger?: React.CSSProperties['color'];
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
            // light: will be calculated from palette.primary.main,
            main: "#012E40",
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            // light: will be calculated from palette.secondary.main,
            main: "#026773",
            // dark: will be calculated from palette.secondary.main,
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
