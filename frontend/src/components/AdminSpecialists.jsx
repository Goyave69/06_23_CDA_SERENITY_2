import React, { useCallback } from "react";
import { DataGrid, GridDeleteIcon } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { IconButton, Tooltip } from "@mui/material";
import ApiHelper from "../services/ApiHelper";

function AdminSpecialists({ specialists, setSpecialists }) {
  const handleCellEditCommit = useCallback((e) => {
    const { id, firstname, lastname, name, c_name, email } = e;

    ApiHelper(
      `specialists/${id}`,
      "PUT",
      JSON.stringify({
        id,
        firstname,
        lastname,
        name,
        c_name,
        email,
      })
    )
      .then(() => {
        console.warn("ok");
        ApiHelper("specialists", "GET")
          .then((res) => res.json())
          .then((data) => setSpecialists(data))
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));

    return e;
  }, []);

  const handleDelete = (id) => {
    ApiHelper(`specialists/${id}`, "DELETE")
      .then((res) => console.warn(res))
      .catch((error) => console.error(error));
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

  const rows = specialists.map((specialist, index) => ({
    id: index + 1,
    lastName: specialist.lastname,
    firstName: specialist.firstname,
    email: specialist.email,
    name: specialist.name,
    c_name: specialist.c_name,
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
