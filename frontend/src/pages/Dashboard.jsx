import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminDashboard from "../components/AdminDashboard";
import CurrentUserContext, {
  useCurrentUserContext,
} from "../Context/UserContext";

function Dashboard() {
  const { user } = useCurrentUserContext(CurrentUserContext);
  const [specialists, setSpecialists] = useState([]);
  const [users, setUsers] = useState([]);
  const [interventions, setInterventions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/specialists")
      .then((results) => setSpecialists(results.data));
    axios
      .get("http://localhost:5000/users")
      .then((results) => setUsers(results.data));
    axios
      .get("http://localhost:5000/interventions")
      .then((results) => setInterventions(results.data));
  }, []);

  return (
    <Box ml={30}>
      <Box>
        <Typography variant="h3" color="initial" sx={{ m: 5, ml: 6 }}>
          {user.firstname ? `Bonjour ${user.firstname}` : null}
        </Typography>
        <AdminDashboard
          specialists={specialists}
          users={users}
          interventions={interventions}
        />
      </Box>
    </Box>
  );
}

export default Dashboard;
