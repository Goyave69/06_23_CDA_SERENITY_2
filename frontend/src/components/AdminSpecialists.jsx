import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

function AdminSpecialists({ specialists, users }) {
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
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = users
    .filter((user) =>
      specialists.some((specialist) => specialist.user_id === user.id)
    )
    .map((user, index) => ({
      id: index + 1,
      lastName: user.lastname,
      firstName: user.firstname,
      email: user.email,
      roles: user.roles,
    }));

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pagination
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}

export default AdminSpecialists;
