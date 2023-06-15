import { Box, Typography } from "@mui/material";
import React from "react";

function AdminDashboard({ appointments }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${formattedDate} ${formattedTime}`;
  }
  return (
    <Box>
      <Box>
        <Typography variant="h6">
          Rendez-vous total : {appointments.length}
        </Typography>
        <Box sx={{ border: "1px solid black", width: "30%" }}>
          <Typography variant="h6">Prochain rendez vous</Typography>
          {appointments.slice(0, 3).map((rdv) => (
            <Box key={rdv.id}>
              <Typography>{`${rdv.firstname} ${rdv.lastname}`}</Typography>
              <Typography>{rdv.name}</Typography>
              <Typography>{formatDate(rdv.date)}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default AdminDashboard;
