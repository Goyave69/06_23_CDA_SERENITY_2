import React, { useCallback } from "react";
import { DataGrid, GridDeleteIcon } from "@mui/x-data-grid";
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

  return (
    <div className="flex flex-col mt-8 max-w-full overflow-x-auto">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {[
                    "ID",
                    "First name",
                    "Last name",
                    "Email",
                    "Specialité",
                    "Cabinet",
                    "Cabinet id",
                    "Actions",
                  ].map((header) => (
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {specialists.map((specialist) => (
                  <tr key={specialist.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {specialist.id + 1}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {specialist.firstname}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {specialist.lastname}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {specialist.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {specialist.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {specialist.c_name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {specialist.c_id}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        type="button"
                        onClick={() => handleDelete(specialist.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSpecialists;
