import React from "react";
import ReactDOM from "react-dom";
import AppBarAndDrawer from "./AppBarAndDrawer/AppBarAndDrawer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignIn } from "./SignIn";
import { Dashboard } from "./Dashboard/Dashboard";
import { Home } from "./Home/Home";
import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";

import { useTheme } from "./theme";
import { DataProvider } from "./Providers/DataProvider";
import People from "./ReduxTable/people";
import Trips from "./Trips/Trips";

import Driver from "./People/Driver";
import Components from "./Components/Components";
import Settings from "./Settings/Settings";
//import { LocalizationProvider } from "@material-ui/pickers";
import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./ReduxTable/peopleSlice";
import { Provider } from "react-redux";
// import { PaletteMode } from "@mui/material";
import "./index.css";

export default function App() {
  // const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
  const store = configureStore({
    reducer: {
      people: peopleReducer,
    },
  });
  const [currentTheme, setCurrentTheme] = useTheme();

  return (
    // <StyledEngineProvider injectFirst>
    <ThemeProvider theme={currentTheme}>
      <Provider store={store}>
        <DataProvider>
          <Router>
            <div>
              <AppBarAndDrawer
                currentTheme={currentTheme}
                setCurrentTheme={setCurrentTheme}
              />
              <Switch>
                <Route path="/login">
                  <SignIn />
                </Route>
                <Route path="/profile">
                  <Driver id={1} />
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route exact path="/people">
                  <People />
                </Route>
                <Route path={`/people/:driverId`}>
                  <Driver />
                </Route>
                <Route path="/map">
                  <Trips />
                </Route>
                <Route path="/components">
                  <Components />
                </Route>
                <Route path="/settings">
                  <Settings
                    currentTheme={currentTheme}
                    setCurrentTheme={setCurrentTheme}
                  />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        </DataProvider>
      </Provider>
    </ThemeProvider>
    // </StyledEngineProvider>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
