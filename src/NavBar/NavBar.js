import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import PalettePicker from "../Theme/PalettePicker";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, Typography } from "@mui/material";
import ThemeSwitch from "../Theme/ThemeSwitch";
import "../index.css";
import { BrowserRouter, Link as ReactLink } from "react-router-dom";
import Menu from "./Menu";
import { ThemeContext } from "../Providers/ThemeContextProvider";
import { Divider } from "@mui/material";
import { PersonOutlineOutlined, PersonOutlineSharp } from "@mui/icons-material";

export const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  logo: {
    color: "white",
    textDecoration: "none",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      // width: `calc(100% - ${drawerWidth}px)`,
      // marginLeft: drawerWidth,
      backgroundColor: `#${theme.palette.primary[300].substring(1)}77`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  active: {
    backgroundColor: theme.palette.action.selected,
  },
}));

function NavBar(props) {
  const { setCurrentTheme, currentTheme } = props;
  const classes = useStyles();
  const isHome = false; // pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode } = useContext(ThemeContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  /* Modifying the source code from the template example to use the react router pathname hook to set
  selected prop and to use the react router component prop */
  return (
    <div
      style={{
        backgroundColor: mode === "dark" ? "#121212" : "#fff",
        width: "100%",
        height: "64px",
        position: "fixed",
        zIndex: 100,
      }}
    >
      <CssBaseline />
      {/*CssBaseline component to kickstart an elegant, consistent, and simple baseline to build upon */}
      <AppBar
        position="fixed"
        className={isHome ? "" : classes.appBar}
        enableColorOnDark
        sx={{
          maxWidth: "1188px",
          margin: "0 auto",
          left: 0,
          right: 0,
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            "align-items": "right",
            // width: `calc(100% - ${drawerWidth}px)`,
            width: "100%",
            backgroundColor: mode === "dark" ? "#121212" : "#fff",
            height: "64px",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
            size="large"
          >
            <MenuIcon />
          </IconButton>
          <Link component={ReactLink} to="/" underline="none">
            <Typography variant="h4">HRMS</Typography>
          </Link>
          <div style={{ flexGrow: 0.3 }}></div>
          <Menu theme={currentTheme} />
          {/* Horizontal Menu End*/}
          <div style={{ flexGrow: 1 }}></div>
          {/* <PalettePicker
              setCurrentTheme={setCurrentTheme}
              currentTheme={currentTheme}
            /> */}
          <ThemeSwitch
            setCurrentTheme={setCurrentTheme}
            currentTheme={currentTheme}
          />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            size="large"
          >
            <PersonOutlineSharp fontSize="large" color="primary" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};

export default NavBar;
