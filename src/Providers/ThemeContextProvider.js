import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
export default function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState("dark");
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
