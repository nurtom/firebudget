import { Chip, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import * as React from "react";

interface Data {
  id: number;
  category: string;
  date: Date;
  account: string;
  payee: string;
  comment: string;
  amount: number;
  approved: boolean;
}

const columns: GridColDef[] = [
  { field: "date", headerName: "Date", type: "date" },
  {
    field: "account",
    headerName: "Account",
    sortable: false,
    disableColumnMenu: true,
  },
  { field: "payee", headerName: "Payee", sortable: false },
  {
    field: "comment",
    headerName: "Comment",
    width: 300,
    sortable: false,
    renderCell: (params: GridRenderCellParams<string>) => <i>{params.value}</i>,
  },
  { field: "category", headerName: "Categorie", width: 200, sortable: false },
  {
    field: "amount",
    headerName: "Amount",
    sortable: false,
    type: "number",
    disableColumnMenu: true,
    renderCell: (params: GridRenderCellParams<number>) => {
      console.log(params);
      return (
        <Typography variant="body1" color={params.value >= 0 ? "green" : "red"}>
          <b>{`${params.value},00 €`}</b>
        </Typography>
        // <Chip
        //   label={`${params.value},00 €`}
        //   color={params.value >= 0 ? "success" : "error"}
        //   variant={params.row.approved ? "outlined" : "filled"}
        // />
      );
    },
  },
  {
    field: "approved",
    headerName: "Approved",
    sortable: false,
    type: "boolean",
    disableColumnMenu: true,
  },
];

const rows: Data[] = [
  {
    id: 1,
    category: "Household/Food",
    date: new Date(),
    account: "Checking",
    payee: "Payee 1",
    comment: "Viele Süßigkeiten",
    amount: 100,
    approved: true,
  },
  {
    id: 2,
    category: "Household/Food",
    date: new Date(),
    account: "Checking",
    payee: "Payee 2",
    comment: "Neue Unterhosen",
    amount: -200,
    approved: false,
  },
  {
    id: 3,
    category: "Mobility / Car Insurance",
    date: new Date(),
    account: "Checking",
    payee: "Payee 3",
    comment: "Wiener Würstchen",
    amount: 300,
    approved: true,
  },
  {
    id: 4,
    category: "Mobility / Car Gas",
    date: new Date(),
    account: "Checking",
    payee: "Payee 4",
    comment: "Playstation 5",
    amount: 400,
    approved: false,
  },
];

export default function Transactions() {
  return (
    <>
      <Typography variant="h4">Transactions</Typography>
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid
              rowHeight={40}
              autoHeight
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick
            />
          </div>
        </div>
      </div>
    </>
  );
}
