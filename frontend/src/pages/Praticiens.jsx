import React from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

function Praticiens() {
  const rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];

  const columns = [
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
  ];

  return (
    <Box ml={30}>
      <Box>
        <Typography variant="h3" color="initial" sx={{ m: 5, ml: 6 }}>
          Praticiens
        </Typography>
        <div style={{ height: 300, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </Box>
    </Box>
  );
}

export default Praticiens;
