import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminDashboard from "../components/AdminDashboard";
import CurrentUserContext, {
  useCurrentUserContext,
} from "../Context/UserContext";
import SpecialistDashboard from "../components/SpecialistDashboard";

function Dashboard() {
  const { user } = useCurrentUserContext(CurrentUserContext);
  const [specialists, setSpecialists] = useState([]);
  const [users, setUsers] = useState([]);
  const [clinics, setClinics] = useState([]);
  const [speciality, setSpeciality] = useState([]);

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
    axios
      .get("http://localhost:5000/specialities")
      .then((results) => setSpeciality(results.data));
    axios
      .get("http://localhost:5000/specialities")
      .then((results) => setSpeciality(results.data));
  }, []);

  return (
    <Box>
      <Box>
        <Typography variant="h3" color="initial" sx={{ m: 5, ml: 6 }}>
          {user.firstname ? `Bonjour ${user.firstname}` : null}
        </Typography>
        {user.roles && user.roles === 3 ? (
          <>
            <AdminDashboard
              specialists={specialists}
              setSpecialists={setSpecialists}
              users={users}
              clinics={clinics}
              setUsers={setUsers}
              setClinics={setClinics}
              speciality={speciality}
            />
            <SpecialistDashboard user={user} clinics={clinics} users={users} />
          </>
        ) : null}
      </Box>
    </Box>
  );
}

export default Dashboard;
