import React, { useState } from "react";
import { Button, Stack, Grid, TextField, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function PatientSignUp() {
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState({
    firstname: "",
    lastname: "",
    address: "",
    zipcode: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const fields = [
    { name: "firstname", label: "Prénom", type: "text" },
    { name: "lastname", label: "Nom", type: "text" },
    { name: "address", label: "Adresse", type: "text" },
    { name: "zipcode", label: "Code Postale", type: "text" },
    { name: "email", label: "E-mail", type: "text" },
    { name: "phone_number", label: "Téléphone", type: "text" },
  ];

  const handleSubmit = () => {
    const body = JSON.stringify(dataUser);

    const resquestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    };
    if (dataUser.firstname && dataUser.lastname && dataUser.email) {
      fetch("http://localhost:5000/users", resquestOptions).then((response) =>
        response.json().then(() => navigate("/login"))
      );
    }
  };

  return (
    <div className="mt-10">
      <div className="flex justify-center">
        <h1 className="text-center text-white text-4xl font-bold bg-[#6c5dd3] w-[80vw] py-7 rounded-lg">
          Inscrivez-vous
        </h1>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          "& .MuiTextField-root": {
            marginBottom: "1rem",
          },
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          {fields.map((field, index) => (
            <Grid item xs={index < 2 ? 12 : 6}>
              <TextField
                label={field.label}
                name={field.name}
                type={field.type}
                value={dataUser[field.name]}
                onChange={(e) =>
                  setDataUser({ ...dataUser, [field.name]: e.target.value })
                }
                fullWidth
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <TextField label="Mot de passe" type="password" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Confirmation Mot de passe"
              type="password"
              name="password"
              value={dataUser.password}
              onChange={(e) =>
                setDataUser({ ...dataUser, password: e.target.value })
              }
              fullWidth
            />
          </Grid>{" "}
        </Grid>
      </Box>
      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          type="button"
          className="border text-white p-5 rounded-lg bg-[#6c5dd3]"
        >
          S'enregistrer
        </button>
      </div>
    </div>
  );
}

export default PatientSignUp;
