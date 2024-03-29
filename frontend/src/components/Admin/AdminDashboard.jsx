import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import AdminUsers from "./AdminUsers";
import AdminSpecialists from "./AdminSpecialists";
import AdminClinics from "./AdminClinics";

function AdminDashboard({
  specialists,
  setSpecialists,
  users,
  clinics,
  setUsers,
  setClinics,
  speciality,
}) {
  const [manageUsers, setManageUsers] = useState(false);
  const [manageSpecialists, setManageSpecialists] = useState(true);
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
          onClick={handleMangeSpecialists}
        >
          <Typography variant="h4" color="black">
            Chirurgiens
          </Typography>
          <Typography variant="p">
            {specialists ? specialists.length : 0}
          </Typography>
        </Box>
        <Box
          sx={boxStyle}
          onClick={handleMangeUsers}
          border={manageUsers ? "2px solid #00B8AB" : null}
        >
          <Typography variant="h4" color="black">
            Utilisateurs
          </Typography>
          <Typography variant="p">{users ? users.length : 0}</Typography>
        </Box>
        <Box
          sx={boxStyle}
          onClick={handleMangeClinics}
          border={manageClinics ? "2px solid #00B8AB" : null}
        >
          <Typography variant="h4" color="black">
            Cabinets
          </Typography>
          <Typography variant="p">{clinics ? clinics.length : 0}</Typography>
        </Box>
      </Box>
      {manageUsers ? <AdminUsers users={users} setUsers={setUsers} /> : null}
      {manageSpecialists ? (
        <AdminSpecialists
          specialists={specialists}
          setSpecialists={setSpecialists}
          users={users}
          clinics={clinics}
          speciality={speciality}
        />
      ) : null}
      {manageClinics ? (
        <AdminClinics clinics={clinics} setClinics={setClinics} />
      ) : null}
    </>
  );
}

export default AdminDashboard;
