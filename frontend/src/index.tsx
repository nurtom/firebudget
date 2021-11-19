import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { red, yellow } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import type {} from "@mui/x-data-grid/themeAugmentation";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const theme = createTheme({
  components: {
    // Use `MuiDataGrid` on both DataGrid and DataGridPro
    MuiDataGrid: {
      styleOverrides: {
        root: {
          // backgroundColor: red[800],
        },
      },
    },
  },
  palette: {
    primary: {
      main: red[900],
    },
    secondary: {
      main: yellow[600],
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
