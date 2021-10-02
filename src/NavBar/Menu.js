import React from "react";
import { Tab, Tabs } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

export default function Menu({ theme }) {
  const [value, setValue] = React.useState(0);
  const theme1 = createTheme({
    palette: {
      primary: purple,
    },
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="simple tabs example"
      indicatorColor="secondary"
      sx={{ paddingTop: "16px" }}
    >
      <Tab label="Accounts" />
      <Tab label="Portfolio" />
      <Tab label="Pay & Transfer" />
    </Tabs>
  );
}
