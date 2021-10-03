import { IconButton } from "@mui/material";
import React from "react";
import { useContext } from "react";
import Brightness2TwoToneIcon from "@mui/icons-material/Brightness2TwoTone";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import { ThemeContext } from "../Providers/ThemeContextProvider";

export default function ThemeSwitch({ currentTheme, setCurrentTheme }) {
  const { mode, setMode } = useContext(ThemeContext);
  const flipDarkMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
    setCurrentTheme({
      ...currentTheme,
      palette: {
        primary: currentTheme.palette.primary,
        secondary: currentTheme.palette.secondary,
        mode: mode === "dark" ? "light" : "dark",
      },
    });
  };
  return (
    <>
      {/* <DarkLightSwitch checked={dark} onChange={flipDarkMode} color="primary" /> */}
      <IconButton
        onClick={flipDarkMode}
        sx={{ padding: "5px", backgroundColor: "transparent" }}
      >
        {mode === "light" ? (
          <Brightness2TwoToneIcon
            color="primary"
            fontSize="medium"
            sx={{ height: "30px" }}
          />
        ) : (
          <WbSunnyTwoToneIcon
            color="primary"
            fontSize="medium"
            sx={{ height: "30px" }}
          />
        )}
      </IconButton>
    </>
  );
}
