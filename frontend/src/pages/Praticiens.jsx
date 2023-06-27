import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { NavLink } from "react-router-dom";
import ApiHelper from "../services/ApiHelper";

function Praticiens() {
  const [praticiens, setPraticiens] = useState([]);
  const rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];

  const columns = [
    { field: "col1", headerName: "Prénom", width: 150 },
    { field: "col2", headerName: "Nom", width: 150 },
    { field: "col3", headerName: "Email", width: 250 },
    { field: "col4", headerName: "Téléphone", width: 150 },
    { field: "col5", headerName: "Adresse", width: 150 },
  ];
  useEffect(() => {
    const getSpecialists = async () => {
      try {
        const response = await ApiHelper("specialists", "GET");
        const data = await response.json();
        setPraticiens(data);
      } catch (error) {
        console.error(error);
      }
    };

    getSpecialists();
  }, []);

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
      <NavLink to="/add-praticien">
        <Button variant="contained" size="mediuem">
          Ajouter un praticien
        </Button>
      </NavLink>
    </Box>
  );
}

export default Praticiens;
