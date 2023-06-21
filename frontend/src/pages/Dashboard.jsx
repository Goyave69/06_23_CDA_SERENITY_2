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
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/specialists")
      .then((results) => setSpecialists(results.data));
    axios
      .get("http://localhost:5000/users")
      .then((results) => setUsers(results.data));
    axios
      .get("http://localhost:5000/clinics")
      .then((results) => setClinics(results.data));
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
          clinics={clinics}
          setUsers={setUsers}
          setClinics={setClinics}
        />
      </Box>
    </Box>
  );
}

export default Dashboard;
