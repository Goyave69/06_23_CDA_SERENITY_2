import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import AdminUsers from "./AdminUsers";
import AdminSpecialists from "./AdminSpecialists";
import AdminClinics from "./AdminClinics";

function AdminDashboard({ specialists, users, clinics, setUsers }) {
  const [manageUsers, setManageUsers] = useState(false);
  const [manageSpecialists, setManageSpecialists] = useState(false);
  const [manageClinics, setManageClinics] = useState(false);
  const boxStyle = {
    width: "30%",
    height: "150px",
    boxShadow: "10px 5px 5px rgba(0, 0, 0, 0.03)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3rem",
    color: "#00B8AB",
    cursor: "pointer",
  };
  const handleMangeUsers = () => {
    setManageSpecialists(false);
    setManageClinics(false);
    setManageUsers(true);
  };
  const handleMangeSpecialists = () => {
    setManageUsers(false);
    setManageClinics(false);
    setManageSpecialists(true);
  };
  const handleMangeClinics = () => {
    setManageUsers(false);
    setManageSpecialists(false);
    setManageClinics(true);
  };

  return (
    <>
      <Box display="flex" justifyContent="space-around">
        <Box
          sx={boxStyle}
          border={manageSpecialists ? "2px solid #00B8AB" : null}
        >
          <Typography
            variant="h4"
            color="black"
            onClick={handleMangeSpecialists}
          >
            Parcticien
          </Typography>
          <Typography variant="p">{specialists.length}</Typography>
        </Box>
        <Box
          sx={boxStyle}
          onClick={handleMangeUsers}
          border={manageUsers ? "2px solid #00B8AB" : null}
        >
          <Typography variant="h4" color="black">
            Users
          </Typography>
          <Typography variant="p">{users.length}</Typography>
        </Box>
        <Box
          sx={boxStyle}
          onClick={handleMangeClinics}
          border={manageClinics ? "2px solid #00B8AB" : null}
        >
          <Typography variant="h4" color="black">
            Cabinets
          </Typography>
          <Typography variant="p">{clinics.length}</Typography>
        </Box>
      </Box>
      {manageUsers ? <AdminUsers users={users} setUsers={setUsers} /> : null}
      {manageSpecialists ? (
        <AdminSpecialists specialists={specialists} users={users} />
      ) : null}
      {manageClinics ? <AdminClinics clinics={clinics} /> : null}
    </>
  );
}

export default AdminDashboard;
