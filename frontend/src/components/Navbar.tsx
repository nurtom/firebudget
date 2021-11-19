import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import PersonIcon from "@mui/icons-material/Person";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
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
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          component={RouterLink}
          to="/"
        >
          <LocalFireDepartmentIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ marginRight: "20px" }}>
          FireBudget
        </Typography>
        <Tabs
          textColor="inherit"
          indicatorColor="secondary"
          value={value}
          onChange={handleChange}
          sx={{ flexGrow: 1 }}
        >
          <Tab label="Budget" component={RouterLink} to="/budget" />
          <Tab label="BudgetMoves" component={RouterLink} to="/budgetmoves" />
          <Tab label="Accounts" component={RouterLink} to="/accounts" />
          <Tab label="Transactions" component={RouterLink} to="/transactions" />
          <Tab label="Investments" component={RouterLink} to="/investments" />
        </Tabs>
        <IconButton size="large" color="inherit">
          <PersonIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
