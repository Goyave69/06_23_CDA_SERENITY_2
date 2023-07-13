import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SpecialistAppointement from "./SpecialistAppointement";

function SpecialistDashboard({ user, clinics }) {
  const [appointements, setAppointement] = useState([]);
  const [manageAppointment, setManageAppointement] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/appointments")
      .then((res) => setAppointement(res.data));
  }, []);

  const Specialistappointements = appointements.filter(
    (appoint) => appoint.specialist_id === user.id
  );

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
  const handleMangeAppointements = () => {
    setManageAppointement(true);
  };
  return (
    <>
      <Box display="flex" justifyContent="space-around">
        <Box
          sx={boxStyle}
          border={manageAppointment ? "2px solid #00B8AB" : null}
          onClick={handleMangeAppointements}
        >
          <Typography variant="h4" color="black">
            Rendez-vous
          </Typography>
          <Typography variant="p">
            {Specialistappointements ? Specialistappointements.length : 0}
          </Typography>
        </Box>
      </Box>
      {manageAppointment ? (
        <SpecialistAppointement
          appointements={Specialistappointements}
          clinics={clinics}
          setAppointements={setAppointement}
        />
      ) : null}
    </>
  );
}

export default SpecialistDashboard;
