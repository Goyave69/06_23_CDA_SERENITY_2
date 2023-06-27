import React from "react";
import { DataGrid, GridDeleteIcon } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { IconButton, Tooltip } from "@mui/material";
import axios from "axios";

function AdminClinics({ clinics, setClinics }) {
  const handleDeleteClinic = (clinicId) => {
    axios
      .delete(`http://localhost:5000/clinics/${clinicId}`)
      .then((res) => {
        console.warn(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleCellEditCommit = React.useCallback((e) => {
    const {
      id,
      name,
      address,
      free_parking,
      handicap_access,
      phone_number,
      zipcode,
    } = e;

    try {
      axios
        .put(`http://localhost:5000/clinics/${id}`, {
          id,

          name,
          address,
          free_parking: free_parking === "oui" ? 1 : 0,
          handicap_access: handicap_access === "oui" ? 1 : 0,
          phone_number,
          zipcode,
        })
        .then(() => {
          console.warn("ok");
          axios
            .get(`http://localhost:5000/clinics`)
            .then((res) => setClinics(res.data));
        });
    } catch (error) {
      console.error(error);
    }
    return e;
  }, []);
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
      sortable: false,
      width: 160,
      editable: true,
      type: "singleSelect",
      valueOptions: [
        { value: "oui", label: "Oui" },
        { value: "non", label: "Non" },
      ],
    },
    {
      field: "handicap_access",
      headerName: "Accé handi",
      sortable: false,
      width: 160,
      editable: true,
      type: "singleSelect",
      valueOptions: [
        { value: "oui", label: "Oui" },
        { value: "non", label: "Non" },
      ],
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
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <div>
          <Tooltip title="Supprimer le cabinet" arrow>
            <IconButton
              color="error"
              onClick={() => handleDeleteClinic(params.row.id)}
            >
              <GridDeleteIcon />
            </IconButton>
          </Tooltip>
        </div>
      ),
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

export default AdminClinics;
