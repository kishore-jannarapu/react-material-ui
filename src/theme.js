import { useState } from "react";
import { createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

const defaultTheme = {
  palette: {
    mode: "dark",
    primary: {
      main: "#FF5C8E",
      300: "#FF5C8E",
    },
    secondary: {
      main: "#5E244D",
      contrastText: "#ffcc00",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: "'Oxanium', cursive;",
  },
  status: {
    danger: "orange",
  },
};

export function useTheme() {
  const [currentTheme, setCurrentTheme] = useState({
    palette: {
      mode: "dark",
      primary: {
        main: "#FF5C8E",
        300: "#FF5C8E",
      },
      secondary: {
        main: "#5E244D",
        contrastText: "#ffcc00",
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });
  const muiTheme = createTheme(
    deepmerge({
      ...defaultTheme,
      ...currentTheme,
    })
  );
  return [muiTheme, setCurrentTheme];
}
