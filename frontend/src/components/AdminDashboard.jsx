import React from "react";
import { Box, Typography } from "@mui/material";

function AdminDashboard({ specialists, users }) {
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

  return (
    <Box display="flex" justifyContent="space-around">
      <Box sx={boxStyle}>
        <Typography variant="h4" color="black">
          Parcticien
        </Typography>
        <Typography variant="p">{specialists.length}</Typography>
      </Box>
      <Box sx={boxStyle}>
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
  );
}

export default AdminDashboard;
