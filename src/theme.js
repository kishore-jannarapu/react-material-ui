import { useState } from "react";
import { createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import { deepOrange } from "@mui/material/colors";

const defaultTheme = {
  palette: {
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: "'Roboto','Oxanium', cursive;",
  },
  status: {
    danger: "orange",
  },
};

export function useTheme() {
  const [currentTheme, setCurrentTheme] = useState({
    palette: {
      mode: "dark",
      primary: deepOrange,
      secondary: deepOrange,
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });
  const mergedTheme = deepmerge({
    ...defaultTheme,
    ...currentTheme,
  });
  const muiTheme = createTheme(mergedTheme);
  return [muiTheme, setCurrentTheme];
}
