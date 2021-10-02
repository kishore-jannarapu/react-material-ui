import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar/NavBar";
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
import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./ReduxTable/peopleSlice";
import { Provider } from "react-redux";
import Footer from "./Components/Footer";
import "./index.css";
import { Divider } from "@mui/material";

export default function App() {
  const store = configureStore({
    reducer: {
      people: peopleReducer,
    },
  });
  const [currentTheme, setCurrentTheme] = useTheme();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={currentTheme}>
        <DataProvider>
          <Provider store={store}>
            <NavBar
              currentTheme={currentTheme}
              setCurrentTheme={setCurrentTheme}
            />
            <div className="site-container">
              <Router>
                <Switch>
                  <Route exact path="/login">
                    <SignIn />
                  </Route>
                  <Route path="/profile">
                    <Driver id={1} />
                  </Route>
                  <Route exact path="/dashboard">
                    <Dashboard />
                  </Route>
                  <Route path="/people">
                    <People />
                  </Route>
                  <Route exact path={`/people/:driverId`}>
                    <Driver />
                  </Route>
                  <Route exact path="/map">
                    <Trips />
                  </Route>
                  <Route exact path="/components">
                    <Components />
                  </Route>
                  <Route exact path="/settings">
                    <Settings
                      currentTheme={currentTheme}
                      setCurrentTheme={setCurrentTheme}
                    />
                  </Route>
                  <Route exact path="/">
                    <Home />
                  </Route>
                </Switch>
              </Router>
              <Divider />
              <Footer />
            </div>
          </Provider>
        </DataProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
