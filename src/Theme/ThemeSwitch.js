import React from "react";
import { useState } from "react";
import DarkLightSwitch from "../Components/Switches/DarkLightSwitch";

export default function ThemeSwitch({ currentTheme, setCurrentTheme }) {
  const [dark, setDark] = useState(true);
  const flipDarkMode = () => {
    setDark(!dark);
    setCurrentTheme({
      ...currentTheme,
      palette: {
        primary: currentTheme.palette.primary,
        secondary: currentTheme.palette.secondary,
        mode: dark ? "light" : "dark",
      },
    });
  };
  return (
    <DarkLightSwitch checked={dark} onChange={flipDarkMode} color="primary" />
  );
}
