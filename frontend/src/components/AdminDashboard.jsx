import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import AdminUsers from "./AdminUsers";
import AdminSpecialists from "./AdminSpecialists";

function AdminDashboard({ specialists, users }) {
  const [manageUsers, setManageUsers] = useState(false);
  const [manageSpecialists, setManageSpecialists] = useState(false);
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
    setManageUsers(true);
  };
  const handleMangeSpecialists = () => {
    setManageUsers(false);
    setManageSpecialists(true);
  };

  return (
    <>
      <Box display="flex" justifyContent="space-around">
        <Box sx={boxStyle}>
          <Typography
            variant="h4"
            color="black"
            onClick={handleMangeSpecialists}
          >
            Parcticien
          </Typography>
          <Typography variant="p">{specialists.length}</Typography>
        </Box>
        <Box sx={boxStyle} onClick={handleMangeUsers}>
          <Typography variant="h4" color="black">
            Users
          </Typography>
          <Typography variant="p">{users.length}</Typography>
        </Box>
        <Box sx={boxStyle}>
          <Typography variant="h4" color="black">
            Interventions
          </Typography>
          <Typography variant="p">{specialists.length}</Typography>
        </Box>
      </Box>
      {manageUsers ? <AdminUsers users={users} /> : null}
      {manageSpecialists ? (
        <AdminSpecialists specialists={specialists} users={users} />
      ) : null}
    </>
  );
}

export default AdminDashboard;
