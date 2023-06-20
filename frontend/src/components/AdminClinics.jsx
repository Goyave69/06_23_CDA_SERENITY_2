import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

function AdminClinics({ clinics }) {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Nom",
      width: 150,
      editable: true,
    },
    {
      field: "address",
      headerName: "Adresse",
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
      field: "free_parking",
      headerName: "Parking gratuit",
      width: 150,
      editable: true,
    },
    {
      field: "handicap_access",
      headerName: "Accé handi",
      sortable: false,
      width: 160,
    },
    {
      field: "phone_number",
      headerName: "Télephone",
      sortable: false,
      width: 160,
    },
    {
      field: "zipcode",
      headerName: "Code postal",
      sortable: false,
      width: 160,
    },
  ];

  const rows = clinics.map((clinic, index) => ({
    id: index + 1,
    name: clinic.name,
    address: clinic.address,
    email: clinic.email,
    free_parking: clinic.free_parking ? "oui" : "non",
    handicap_access: clinic.handicap_access ? "oui" : "non",
    phone_number: clinic.phone_number,
    zipcode: clinic.zipcode,
  }));

  return (
    <Box sx={{ height: 631, maxWidth: "100%", mt: 2 }}>
      <DataGrid rows={rows} columns={columns} pagination pageSize={10} />
    </Box>
  );
}

export default AdminClinics;
