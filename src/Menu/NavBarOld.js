import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Icon from "@mui/material/Icon";

function NavBar() {
  const { pathname } = useLocation();
  return (
    // <List>
    //   {[
    //     //{ text: "home", icon: "home" },
    //     { text: "login", icon: "lock" },
    //     //{ text: "profile", icon: "person" },
    //     { text: "dashboard", icon: "dashboard" },
    //     // { text: "people", icon: "people" },
    //     // { text: "map", icon: "map" },
    //     { text: "components", icon: "apps" },
    //     // { text: "settings", icon: "settings" },
    //   ].map(({ text, icon }, index) => (
    //     <ListItem
    //       component={RouterLink}
    //       selected={pathname === `/${text}`}
    //       to={`/${text}`}
    //       button
    //       key={text}
    //     >
    //       <ListItemIcon>
    //         <Icon>{icon}</Icon>
    //       </ListItemIcon>
    //       <ListItemText primary={text.toUpperCase()} />
    //     </ListItem>
    //   ))}
    // </List>
  );
}

export default NavBar;
