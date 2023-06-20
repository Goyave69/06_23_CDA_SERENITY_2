import React from "react";
import Avatar from "@mui/material/Avatar";
import { Button, Stack, Grid, TextField, styled, Box } from "@mui/material";
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

/* const CustomTextField = styled(TextField)(({ themee }) => ({
  marginTop: 20,
})); */

const useStyles = styled({
  root: {
    "& .MuiTextField-root": {
      // Ici, définissez vos styles
      backgroundColor: "lightgrey",
      borderRadius: "5px",
    },
  },
});

function PraticienForm() {
  const { user } = useCurrentUserContext(CurrentUserContext);
  const classes = useStyles();
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
    SegmentPhoto1: {
      position: "relative",
      width: "80%",
      left: "3rem",
      backgroundColor: "white",
      marginBottom: "2rem",
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
  return (
    <div>
      <h2 style={Style.HelloDoctor}>Bonjour Docteur {user.firstname}</h2>
      <div style={Style.FormContainer}>
        <div>
          <ThemeProvider theme={theme}>
            <Stack
              display="block"
              direction="row"
              spacing={1}
              sx={{ marginTop: "2rem", marginBottom: "2rem" }}
            >
              <Button
                size="medium"
                variant="contained"
                sx={{ borderRadius: 3 }}
              >
                Profil
              </Button>
              <Button
                size="medium"
                variant="contained"
                sx={{ borderRadius: 3 }}
              >
                Mot de passe
              </Button>
              <Button
                size="medium"
                variant="contained"
                sx={{ borderRadius: 3 }}
              >
                Email
              </Button>
              <Button
                size="medium"
                variant="contained"
                sx={{ borderRadius: 3 }}
              >
                Notifications
              </Button>
              <Button
                size="medium"
                variant="contained"
                sx={{ borderRadius: 3 }}
              >
                Paramètres
              </Button>
            </Stack>
          </ThemeProvider>
        </div>
        <div style={Style.SegmentPhoto1}>
          <p style={{ marginBottom: "1.5rem" }}>Votre Photo</p>
          <div style={Style.SegmentPhoto2}>
            <div>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
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
            Prenez le temps de faire une belle photo c'est important pour vos
            patients
          </p>
        </div>
        <div className={classes.root}>
          <Box
            sx={{
              "& .MuiTextField-root": {
                // Ici, définissez vos styles
                marginBottom: "2rem",
              },
            }}
          >
            <Grid container spacing={2} sx={{ marginTop: "50px" }}>
              <Grid item xs={6}>
                <TextField label="Nom" fullWidth focused />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Prénom" fullWidth focused />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Téléphone" fullWidth focused />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Mail" fullWidth focused />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Spécialité" fullWidth focused />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Langues parlées" fullWidth focused />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Bio" multiline rows={6} fullWidth focused />
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
      </div>
    </div>
  );
}

export default PraticienForm;
