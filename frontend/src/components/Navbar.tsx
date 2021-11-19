import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import * as React from "react";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <LocalFireDepartmentIcon />
        <Typography variant="h6" component="div">
          FireBudget
        </Typography>
        <Tabs
          textColor="inherit"
          indicatorColor="secondary"
          value={value}
          onChange={handleChange}
          sx={{ flexGrow: 1 }}
        >
          <Tab label="Home" component={RouterLink} to="/" />
          <Tab label="Budget" component={RouterLink} to="/budget" />
          <Tab label="Transactions" component={RouterLink} to="/transactions" />
        </Tabs>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
}
