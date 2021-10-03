import React, { useContext } from "react";
import NavBar from "./NavBar/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SignIn } from "./SignIn";
import { Dashboard } from "./Dashboard/Dashboard";
import { Home } from "./Home/Home";
import Footer from "./Components/Footer";
import { Divider } from "@mui/material";
import { ThemeContext } from "./Providers/ThemeContextProvider";
import People from "./ReduxTable/people";
import Trips from "./Trips/Trips";
import Driver from "./People/Driver";
import Components from "./Components/Components";
import Settings from "./Settings/Settings";
import "./index.css";

export default function Layout({ currentTheme, setCurrentTheme }) {
  const { mode } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: mode === "dark" ? "#2b2b2b" : "#f3f3f3",
      }}
    >
      <BrowserRouter>
        <NavBar currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
        <div className="site-container">
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
            <Route path="/components">
              <Components />
            </Route>
            <Route exact path="/settings">
              <Settings
                currentTheme={currentTheme}
                setCurrentTheme={setCurrentTheme}
              />
            </Route>
            <Route path="/overview">
              <Home />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
          <Divider />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}
