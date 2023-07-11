import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Button, Stack, Grid, TextField, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";
import CurrentUserContext, {
  useCurrentUserContext,
} from "../Context/UserContext";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          backgroundColor: "#6c5dd3",
          "&:hover": {
            backgroundColor: "#6c5dd3",
          },
        },
      },
    },
  },
});

function PraticienForm() {
  const { user } = useCurrentUserContext(CurrentUserContext);
  const [currentForm, setCurrentForm] = useState("profil");
  const [praticiens, setPraticiens] = useState([]);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    user: {
      lastname: "",
      firstname: "",
      email: "",
      password: "",
      address: "",
      city: "",
      zipcode: "",
      phone_number: "",
    },
    specialist: {
      specialities: "",
      languages: "",
      bio: "",
      diplomes: "",
      formations: "",
      experiences: "",
      works: "",
      distinctions: "",
    },
  });

  const Style = {
    HelloDoctor: {},

    FormContainer: {
      display: "flex",
      justifyContent: "center",

      width: "80%",

      // backgroundColor: "#242731",
    },
    FormSection: {},
    GroupButtonsSection: {},

    SegmentPhoto2: {
      display: "flex",
      alignItems: "center",
    },

    ButtonNewPhoto: {
      borderRadius: 5,
      width: 200,
      backgroundColor: "#6c5dd3",
    },
  };
  const handleClick = (form) => {
    setCurrentForm(form);
  };
  const handleChange = (e) => {
    const field = e.target.name.split(".");
    if (field.length === 2) {
      const [parent, child] = field;
      setFormData((prevState) => ({
        ...prevState,
        [parent]: {
          ...prevState[parent],
          [child]: e.target.value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [field[0]]: e.target.value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = JSON.stringify(formData);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    };
    if (
      formData.user.lastname &&
      formData.user.firstname &&
      formData.user.email &&
      formData.user.password
    ) {
      fetch("http://localhost:5000/users/specialist", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setPraticiens(data);
          navigate("/dashboard");
        });
    }
  };

  console.warn(praticiens);

  return (
    <div className="mb-5">
      <h2 className="font-bold text-3xl">Bonjour Docteur {user.firstname}</h2>
      <div style={Style.GroupButtonsSection} className=" ml-[9rem]">
        <ThemeProvider theme={theme}>
          <Stack
            display="block"
            direction="row"
            spacing={1}
            sx={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <Button
              onClick={() => handleClick("profil")}
              size="medium"
              variant="contained"
              sx={{ borderRadius: 3 }}
            >
              Profil
            </Button>
            <Button
              onClick={() => handleClick("password")}
              size="medium"
              variant="contained"
              sx={{ borderRadius: 3 }}
            >
              Mot de passe
            </Button>
            <Button
              onClick={() => handleClick("email")}
              size="medium"
              variant="contained"
              sx={{ borderRadius: 3 }}
            >
              Email
            </Button>
            <Button size="medium" variant="contained" sx={{ borderRadius: 3 }}>
              Notifications
            </Button>
            <Button size="medium" variant="contained" sx={{ borderRadius: 3 }}>
              Paramètres
            </Button>
          </Stack>
        </ThemeProvider>
      </div>
      <div>
        <form style={Style.FormContainer} className="mx-auto h-auto">
          {currentForm === "profil" && (
            <div>
              <div style={Style.SegmentPhoto1}>
                <p style={{ marginBottom: "1.5rem" }}>Votre Photo</p>
                <div style={Style.SegmentPhoto2}>
                  <div>
                    <Avatar
                      alt="Remy Sharp"
                      sx={{ width: 80, height: 80, marginRight: "2rem" }}
                    />
                  </div>
                  <div>
                    <Button sx={Style.ButtonNewPhoto} variant="contained">
                      Nouvelle Photo
                    </Button>
                  </div>
                </div>
                <p style={{ marginLeft: "7rem" }}>
                  Prenez le temps de faire une belle photo c'est important pour
                  vos patients
                </p>
              </div>
              <Box
                sx={{
                  "& .MuiTextField-root": {
                    marginBottom: "2rem",
                  },
                }}
              >
                <Grid container spacing={2} sx={{ marginTop: "50px" }}>
                  <Grid item xs={5}>
                    <TextField
                      label="Nom"
                      name="user.lastname"
                      value={formData.user.lastname}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      label="Prénom"
                      name="user.firstname"
                      value={formData.user.firstname}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      label="Adresse"
                      name="user.address"
                      value={formData.specialist.address}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      label="Code Postale"
                      name="user.zipcode"
                      value={formData.user.zipcode}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      label="Téléphone"
                      name="user.phone_number"
                      value={formData.user.phone_number}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      label="Adresse Email"
                      name="user.email"
                      value={formData.user.email}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      label="Mot de passe"
                      name="user.password"
                      type="password"
                      value={formData.user.password}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>{" "}
                  <Grid item xs={5}>
                    <TextField
                      label="Confirmation Mot de passe"
                      type="password"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Box>
            </div>
          )}
          {/*      {currentForm === "password" && (
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <TextField
                label="Mot de passe"
                name="user.password"
                value={formData.user.password}
                onChange={handleChange}
                type="password"
                focused
                sx={{ marginBottom: "2rem" }}
              />
              <TextField
                label="Confirmer le mot de passe"
                type="password"
                focused
              />
            </Box>
          )}
          {currentForm === "email" && (
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <TextField
                label="Email du praticien"
                type="email"
                name="user.email"
                value={formData.user.email}
                onChange={handleChange}
                focused
                sx={{ marginBottom: "2rem", width: "50%" }}
              />
              <TextField
                label="Confirmer l'adresse email"
                type="email"
                focused
                sx={{ width: "50%" }}
              />
            </Box>
          )} */}
        </form>

        <button
          onClick={handleSubmit}
          type="button"
          className="text-center whitespace-nowrap text-sm font-['Inter'] font-bold leading-[20px] text-white ml-[8rem]  bg-[#6c5dd3] flex flex-col justify-center h-12 shrink-0 items-stretch px-5 rounded-lg "
        >
          Ajouter le Praticien
        </button>
      </div>
    </div>
  );
}

export default PraticienForm;
