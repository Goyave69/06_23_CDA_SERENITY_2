import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Button, Stack, Grid, TextField, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

  const [formData, setFormData] = useState({
    user: {
      lastname: "",
      firstname: "",
      email: "",
      password: "",
    },
    specialist: {
      phone_number: "",
      address: "",
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
    HelloDoctor: {
      position: "absolute",
      width: "580px",
      height: "99px",
      left: "317px",
      top: "48px",
    },

    FormContainer: {
      position: "relative",
      width: "1024px",
      height: "2341px",
      left: "356px",
      top: "299px",
      // backgroundColor: "#242731",
    },
    FormSection: {
      position: "relative",
      width: "647px",
      height: "100px",
      left: "356px",
      top: "377px",
    },
    GroupButtonsSection: {
      position: "relative",
      width: "647px",
      height: "100px",
      left: "356px",
      top: "300px",
    },

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
        });
    }
  };

  console.warn(praticiens);

  return (
    <div>
      <h2 style={Style.HelloDoctor}>Bonjour Docteur {user.firstname}</h2>
      <div style={Style.GroupButtonsSection}>
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
        <form onSubmit={handleSubmit} style={Style.FormContainer}>
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
                  <Grid item xs={6}>
                    <TextField
                      label="Nom"
                      name="user.lastname"
                      value={formData.user.lastname}
                      onChange={handleChange}
                      fullWidth
                      focused
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Prénom"
                      name="user.firstname"
                      value={formData.user.firstname}
                      onChange={handleChange}
                      fullWidth
                      focused
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Téléphone"
                      name="phone_number"
                      value={formData.user.phone}
                      onChange={handleChange}
                      fullWidth
                      focused
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Adresse"
                      name="address"
                      onChange={handleChange}
                      fullWidth
                      focused
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Spécialité"
                      name="specialities"
                      value={formData.user.specialities}
                      onChange={handleChange}
                      fullWidth
                      focused
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Langues parlées"
                      name="languages"
                      value={formData.user.languages}
                      onChange={handleChange}
                      fullWidth
                      focused
                    />
                  </Grid>{" "}
                  <Grid item xs={6}>
                    <TextField
                      label="Spécialité"
                      name="specialities"
                      value={formData.user.specialities}
                      onChange={handleChange}
                      fullWidth
                      focused
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Langues parlées"
                      name="languages"
                      value={formData.user.languages}
                      onChange={handleChange}
                      fullWidth
                      focused
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Bio"
                      multiline
                      rows={6}
                      fullWidth
                      focused
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Diplômes Nationaux et universitaire"
                      multiline
                      rows={6}
                      fullWidth
                      focused
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Autres Formations"
                      multiline
                      rows={6}
                      fullWidth
                      focused
                    />
                  </Grid>{" "}
                  <Grid item xs={12}>
                    <TextField
                      label="Expériences"
                      multiline
                      rows={6}
                      fullWidth
                      focused
                    />
                  </Grid>{" "}
                  <Grid item xs={12}>
                    <TextField
                      label="Travaux et publications"
                      multiline
                      rows={6}
                      fullWidth
                      focused
                    />
                  </Grid>{" "}
                  <Grid item xs={12}>
                    <TextField
                      label="Distinctions et prix"
                      multiline
                      rows={6}
                      fullWidth
                      focused
                    />
                  </Grid>
                </Grid>
              </Box>
            </div>
          )}
          {currentForm === "password" && (
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
          )}
          <Button type="submit" variant="contained" sx={Style.ButtonSave}>
            Créer le Praticien
          </Button>
        </form>
      </div>
    </div>
  );
}

export default PraticienForm;
