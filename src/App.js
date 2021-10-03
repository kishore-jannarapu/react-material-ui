import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";

import { useTheme } from "./theme";
import { DataProvider } from "./Providers/DataProvider";

import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./ReduxTable/peopleSlice";
import { Provider } from "react-redux";

import "./index.css";
import ThemeContextProvider from "./Providers/ThemeContextProvider";
import Layout from "./Layout";

export default function App() {
  const store = configureStore({
    reducer: {
      people: peopleReducer,
    },
  });
  const [currentTheme, setCurrentTheme] = useTheme();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeContextProvider>
        <ThemeProvider theme={currentTheme}>
          <DataProvider>
            <Provider store={store}>
              <Layout
                currentTheme={currentTheme}
                setCurrentTheme={setCurrentTheme}
              />
            </Provider>
          </DataProvider>
        </ThemeProvider>
      </ThemeContextProvider>
    </StyledEngineProvider>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
