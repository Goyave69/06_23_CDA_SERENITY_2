import React from "react";
import { DataGrid, GridDeleteIcon } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { IconButton, Tooltip } from "@mui/material";
import axios from "axios";

function AdminSpecialists({ specialists, setSpecialists }) {
  const handleCellEditCommit = React.useCallback((e) => {
    const { id, firstname, lastname, name, c_id, c_name, email } = e;

    // Si le champ "c_name" existe, effectuez une requête PUT pour mettre à jour le nom de la clinique
    if (e.c_name) {
      axios
        .put(`http://localhost:5000/specialists/clinic/${id}`, {
          clinic_id: c_id,
        })
        .then(() => {
          console.warn("Mise à jour réussie");
          axios
            .get(`http://localhost:5000/specialists`)
            .then((res) => setSpecialists(res.data));
        });
      return e.c_name;
    }
    try {
      axios
        .put(`http://localhost:5000/specialists/${id}`, {
          firstname,
          lastname,
          name,
          email,
          c_name,
        })
        .then(() => {
          console.warn("Mise à jour réussie");
          axios
            .get(`http://localhost:5000/specialists`)
            .then((res) => setSpecialists(res.data));
        });
    } catch (error) {
      console.error(error);
    }

    return e;
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/specialists/${id}`)
      .then((res) => {
        console.warn(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
      field: "c_id",
      headerName: "Cabinet id",
      width: 100,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <div>
          <Tooltip title="Supprimer" arrow>
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

  const rows = specialists.map((specialist, index) => ({
    id: index + 1,
    lastName: specialist.lastname,
    firstName: specialist.firstname,
    email: specialist.email,
    name: specialist.name,
    c_name: specialist.c_name,
    c_id: specialist.c_id,
  }));

  return (
    <Box sx={{ height: 631, maxWidth: "100%", mt: 2 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pagination
        pageSize={10}
        processRowUpdate={handleCellEditCommit}
      />
    </Box>
  );
}

export default AdminSpecialists;
