import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { Button, Stack, Grid, TextField, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
  const [clinics, setClinics] = useState([]);
  const [specialities, setSpecialities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/clinics")
      .then((results) => setClinics(results.data));
    axios
      .get("http://localhost:5000/specialities")
      .then((results) => setSpecialities(results.data));
  }, []);

  const [confPassword, setConfPassword] = useState("");
  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    address: "",
    city: "",
    zipcode: "",
    phone_number: "",
    speciality_id: "",
    clinic_id: "",
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
  // const handleChange = (e) => {
  //   const field = e.target.name.split(".");
  //   if (field.length === 2) {
  //     const [parent, child] = field;
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       [parent]: {
  //         ...prevState[parent],
  //         [child]: e.target.value,
  //       },
  //     }));
  //   } else {
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       [field[0]]: e.target.value,
  //     }));
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = JSON.stringify(formData);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    };
    if (
      formData.lastname &&
      formData.firstname &&
      formData.email &&
      formData.password &&
      formData.speciality_id &&
      formData.clinic_id &&
      formData.password === confPassword
    ) {
      fetch("http://localhost:5000/users/specialist", requestOptions).then(
        () => {
          navigate("/dashboard");
        }
      );
    }
  };

  const handleAutoComplete = () => {
    setFormData({
      lastname: "René",
      firstname: "Jean",
      email: "jr@demo.fr",
      password: "demoday",
      address: "12 rue de la boulangerie",
      city: "Lyon",
      zipcode: "69002",
      phone_number: "06 63 37 71 12",
      speciality_id: 2,
      clinic_id: 1,
    });
    setConfPassword("demoday");
  };

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
                      value={formData.lastname}
                      onChange={(e) =>
                        setFormData((curr) => ({
                          ...curr,
                          lastname: e.target.value,
                        }))
                      }
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      label="Prénom"
                      name="user.firstname"
                      value={formData.firstname}
                      onChange={(e) =>
                        setFormData((curr) => ({
                          ...curr,
                          firstname: e.target.value,
                        }))
                      }
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      label="Adresse"
                      name="user.address"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData((curr) => ({
                          ...curr,
                          address: e.target.value,
                        }))
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      label="Code Postale"
                      name="user.zipcode"
                      value={formData.zipcode}
                      onChange={(e) =>
                        setFormData((curr) => ({
                          ...curr,
                          zipcode: e.target.value,
                        }))
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      label="Téléphone"
                      name="user.phone_number"
                      value={formData.phone_number}
                      onChange={(e) =>
                        setFormData((curr) => ({
                          ...curr,
                          phone_number: e.target.value,
                        }))
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      label="Adresse Email"
                      name="user.email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((curr) => ({
                          ...curr,
                          email: e.target.value,
                        }))
                      }
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      label="Mot de passe"
                      name="user.password"
                      type="password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData((curr) => ({
                          ...curr,
                          password: e.target.value,
                        }))
                      }
                      fullWidth
                      required
                    />
                  </Grid>{" "}
                  <Grid item xs={5}>
                    <TextField
                      label="Confirmation Mot de passe"
                      type="password"
                      value={confPassword}
                      onChange={(e) => setConfPassword(e.target.value)}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <select
                      className="px-2 py-1 w-full mt-2 border-2 whitespace-nowrap"
                      onChange={(e) =>
                        setFormData((curr) => ({
                          ...curr,
                          clinic_id: e.target.value,
                        }))
                      }
                      value={formData.clinic_id}
                    >
                      <option value="" hidden>
                        -- Cabinet --
                      </option>
                      {clinics?.map((clinic) => (
                        <option key={clinic.id} value={clinic.id}>
                          {clinic.name}
                        </option>
                      ))}
                    </select>
                  </Grid>
                  <Grid item xs={5}>
                    <select
                      className="px-2 py-1 w-full mt-2 border-2 whitespace-nowrap"
                      onChange={(e) =>
                        setFormData((curr) => ({
                          ...curr,
                          speciality_id: e.target.value,
                        }))
                      }
                      value={formData.speciality_id}
                    >
                      <option value="" hidden>
                        -- Spécialité --
                      </option>
                      {specialities?.map((speciality) => (
                        <option key={speciality.id} value={speciality.id}>
                          {speciality.name}
                        </option>
                      ))}
                    </select>
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
        <div style={{ margin: 10 }} className="flex gap-10">
          <button
            onClick={handleSubmit}
            type="button"
            className="text-center whitespace-nowrap text-sm font-['Inter'] font-bold leading-[20px] text-white ml-[8rem]  bg-[#6c5dd3] flex flex-col justify-center h-12 shrink-0 items-stretch px-5 rounded-lg "
          >
            Ajouter le Praticien
          </button>
          <button
            type="button"
            onClick={handleAutoComplete}
            className=" w-24 text-xl text-white bg-green-500 rounded-md text-center"
          >
            DEMO
          </button>
        </div>
      </div>
    </div>
  );
}

export default PraticienForm;
