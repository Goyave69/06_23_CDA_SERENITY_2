import React from "react";
import { DataGrid, GridDeleteIcon } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { IconButton, Tooltip } from "@mui/material";
import axios from "axios";

function AdminUsers({ users, setUsers }) {
  const handleDeleteUser = (userId) => {
    axios
      .delete(`http://localhost:5000/users/${userId}`)
      .then((res) => {
        console.warn(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleCellEditCommit = React.useCallback((e) => {
    const { id, email, firstName, lastName, roles } = e;

    try {
      axios
        .put(`http://localhost:5000/users/${id}`, {
          id,
          email,
          firstName,
          lastName,
          roles,
        })
        .then(() => {
          axios
            .get(`http://localhost:5000/users`)
            .then((res) => setUsers(res.data));
        });
    } catch (error) {
      console.error(error);
    }
    return e;
  }, []);

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
      field: "roles",
      headerName: "Roles",
      width: 150,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      editable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <div>
          <Tooltip title="Supprimer l'utilisateur" arrow>
            <IconButton
              color="error"
              onClick={() => handleDeleteUser(params.row.id)}
            >
              <GridDeleteIcon />
            </IconButton>
          </Tooltip>
        </div>
      ),
    },
  ];

  const rows = users.map((user) => ({
    id: user.id,
    lastName: user.lastname,
    firstName: user.firstname,
    email: user.email,
    roles: user.roles,
  }));

  return (
    <Box sx={{ height: 631, maxWidth: "100%", mt: 2 }}>
      <DataGrid
        editMode="row"
        rows={rows}
        columns={columns}
        pagination
        processRowUpdate={handleCellEditCommit}
        onProcessRowUpdateError={(e) => console.warn(e)}
        pageSize={10}
      />
    </Box>
  );
}

export default AdminUsers;
