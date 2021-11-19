import AddIcon from "@mui/icons-material/Add";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import LockIcon from "@mui/icons-material/Lock";
import { Button, ButtonGroup } from "@mui/material";
import * as React from "react";

export default function Budget() {
  return (
    <>
      <ButtonGroup>
        <Button startIcon={<AddIcon />}>new transaction</Button>
        <Button startIcon={<FilterAltIcon />}>filter</Button>
        <Button startIcon={<LockIcon />}>reconcile</Button>
      </ButtonGroup>
    </>
  );
}
