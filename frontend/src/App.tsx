import { Box, Typography } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Budget from "./components/Budget";
import Navbar from "./components/Navbar";
import Transactions from "./components/Transactions";

function App() {
  return (
    <>
      <Navbar />
      <Box sx={{ marginTop: "48px", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Typography>Home</Typography>} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
