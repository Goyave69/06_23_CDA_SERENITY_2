import React, { useState, useEffect } from "react";
import { Box, Button, Typography, IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridDeleteIcon } from "@mui/x-data-grid";

import { NavLink } from "react-router-dom";
import ApiHelper from "../services/ApiHelper";

function Praticiens() {
  const [praticiens, setPraticiens] = useState([]);
  const handleDelete = (id) => {
    ApiHelper(`specialists/${id}`, "DELETE")
      .then((res) => console.warn(res))
      .catch((error) => console.error(error));
  };
  const rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      editable: true,
    },

    {
      field: "name",
      headerName: "Specialité",
      width: 250,
      editable: true,
    },
    {
      field: "c_name",
      headerName: "Cabinet",
      width: 250,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <div>
          <Tooltip title="Supprimer le praticien" arrow>
            <IconButton
              color="error"
              onClick={() => handleDelete(params.row.id)}
            >
              <GridDeleteIcon />
            </IconButton>
          </Tooltip>
        </div>
      ),
    },
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
      <Box display="flex" justifyContent="center" mt="2rem">
        <NavLink to="/add-praticien">
          <Button variant="contained" size="large">
            Nouveau praticien
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
}

export default Praticiens;
