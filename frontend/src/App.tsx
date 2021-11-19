import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Accounts from "./components/Accounts";
import Budget from "./components/Budget";
import BudgetMoves from "./components/BudgetMoves";
import Investments from "./components/Investments";
import Navbar from "./components/Navbar";
import Transactions from "./components/Transactions";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <>
      <Navbar />
      <Box sx={{ marginTop: "48px", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/budgetmoves" element={<BudgetMoves />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/investments" element={<Investments />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
