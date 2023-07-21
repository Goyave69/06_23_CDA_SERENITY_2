import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SpecialistAppointement from "./SpecialistAppointement";
import PatientSpecialist from "./PatientSpecialist";
import SpecialistInterventions from "./SpecialistInterventions";

function SpecialistDashboard({
  user,
  clinics,
  users,
  interventions,
  setInterventions,
}) {
  const [appointements, setAppointement] = useState([]);
  const [surgerys, setSurgery] = useState([]);
  const [manageAppointment, setManageAppointement] = useState(false);
  const [managePatient, setManagePatient] = useState(true);
  const [manageInterventions, setManageInterventions] = useState(false);
  const [specialists, setSpecialists] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/appointments")
      .then((res) => setAppointement(res.data));
    axios
      .get("http://localhost:5000/surgeries")
      .then((res) => setSurgery(res.data));
    axios
      .get("http://localhost:5000/specialists")
      .then((res) => setSpecialists(res.data));
  }, []);

  const patients = users.filter((patient) => patient.roles === 1);

  const Specialistappointements = appointements.filter(
    (appoint) => appoint.specialist_id === 2
  );
  const praticien = specialists?.filter(
    (specialist) => specialist.id === user.id
  );
  const specialist_id = praticien[0]?.specialist_id;

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

  const handleManageIntervention = () => {
    setManageAppointement(false);
    setManagePatient(false);
    setManageInterventions(true);
  };

  const handleMangeAppointements = () => {
    setManagePatient(false);
    setManageInterventions(false);
    setManageAppointement(true);
  };

  const handleMangePatient = () => {
    setManageAppointement(false);
    setManageInterventions(false);
    setManagePatient(true);
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
        <Box
          sx={boxStyle}
          border={managePatient ? "2px solid #00B8AB" : null}
          onClick={handleMangePatient}
        >
          <Typography variant="h4" color="black">
            Patient
          </Typography>
          <Typography variant="p">{patients ? patients.length : 0}</Typography>
        </Box>
        <Box
          sx={boxStyle}
          border={manageInterventions ? "2px solid #00B8AB" : null}
          onClick={handleManageIntervention}
        >
          <Typography variant="h4" color="black">
            Interventions
          </Typography>
          <Typography variant="p">
            {interventions ? interventions.length : 0}
          </Typography>
        </Box>
      </Box>

      {manageAppointment ? (
        <SpecialistAppointement
          appointements={Specialistappointements}
          clinics={clinics}
          setAppointements={setAppointement}
          surgery={surgerys}
        />
      ) : null}

      {managePatient ? (
        <PatientSpecialist
          patients={patients}
          clinics={clinics}
          specialistId={specialist_id}
          interventions={interventions}
          setAppointement={setAppointement}
        />
      ) : null}

      {manageInterventions ? (
        <SpecialistInterventions
          interventions={interventions}
          patients={patients}
          clinics={clinics}
          surgerys={surgerys}
          setInterventions={setInterventions}
        />
      ) : null}
    </>
  );
}

export default SpecialistDashboard;
