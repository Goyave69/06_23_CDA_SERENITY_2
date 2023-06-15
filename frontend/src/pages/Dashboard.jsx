import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminDashboard from "../components/AdminDashboard";
import CurrentUserContext, {
  useCurrentUserContext,
} from "../Context/UserContext";

function Dashboard() {
  const { user } = useCurrentUserContext(CurrentUserContext);
  const [appointments, setAppointements] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/appointments")
      .then((results) => setAppointements(results.data));
  }, []);

  return (
    <Box ml={30}>
      <Box>
        <Typography variant="h3" color="initial" sx={{ m: 3 }}>
          {`Bonjour ${user.firstname ? user.firstname : null}`}
        </Typography>
        <AdminDashboard appointments={appointments} />
      </Box>
    </Box>
  );
}

export default Dashboard;
