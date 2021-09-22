import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles, useTheme } from "@mui/styles";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Icon from "@mui/material/Icon";
import PalettePicker from "../Theme/PalettePicker";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Switch, Typography } from "@mui/material";

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
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
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

function DarkMode({ currentTheme, setCurrentTheme }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const updatedTheme = {
      ...currentTheme,
      palette: { ...currentTheme.palette, mode: dark ? "dark" : "light" },
    };
    // console.log("dark =" + dark + " theme=" + JSON.stringify(updatedTheme));
    setCurrentTheme(updatedTheme);
  }, [dark]);
  const flipDarkMode = (event) => {
    setDark(!dark);
  };
  return <Switch checked={dark} onChange={flipDarkMode} color="primary" />;
}
function ResponsiveDrawer(props) {
  const { container, setCurrentTheme, currentTheme } = props;
  const classes = useStyles();
  const theme = useTheme();
  const { pathname } = useLocation();
  const isHome = false; // pathname === "/";
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  /* Modifying the source code from the template example to use the react router pathname hook to set
  selected prop and to use the react router component prop */

  const drawer = (
    <div>
      <div
        className={classes.toolbar}
        style={{ margin: "auto", padding: "10px" }}
      >
        <Typography>HRMS</Typography>
        <DarkMode
          setCurrentTheme={setCurrentTheme}
          currentTheme={currentTheme}
        />
      </div>
      <List>
        {[
          //{ text: "home", icon: "home" },
          { text: "login", icon: "lock" },
          //{ text: "profile", icon: "person" },
          { text: "dashboard", icon: "dashboard" },
          // { text: "people", icon: "people" },
          // { text: "map", icon: "map" },
          { text: "components", icon: "apps" },
          // { text: "settings", icon: "settings" },
        ].map(({ text, icon }, index) => (
          <ListItem
            component={RouterLink}
            selected={pathname === `/${text}`}
            to={`/${text}`}
            button
            key={text}
          >
            <ListItemIcon>
              <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={text.toUpperCase()} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <div
        style={{
          height: "64px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "contrast(75%)",
          backgroundImage: "url(/img/wallpaper.jpeg)",
          position: "absolute",
          top: "0px",
          width: "100%",
          zIndex: -2,
        }}
      /> */}
      <AppBar position="sticky" className={isHome ? "" : classes.appBar}>
        <Toolbar
          sx={{
            position: "fixed",
            display: "flex",
            "align-items": "right",
            width: `calc(100% - ${drawerWidth}px)`,
            backgroundColor: currentTheme.palette.primary.main,
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
          <div style={{ flexGrow: 1 }}></div>
          <PalettePicker
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
            <AccountCircleIcon sx={{ size: 500 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      {isHome && !mobileOpen ? (
        <div />
      ) : (
        <nav aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden mdDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open={isHome}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      )}
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};

export default ResponsiveDrawer;
