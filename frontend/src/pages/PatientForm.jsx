import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useNavigate, useOutletContext } from "react-router-dom";
import ApiHelper from "../services/ApiHelper";
import { useCurrentUserContext } from "../Context/UserContext";

function PatientForm() {
  const { user, token } = useCurrentUserContext();
  const [reload, setReload, doneAdministrative] = useOutletContext();

  const [patientForm, setPatientForm] = useState({
    gender: "",
    birthdate: "",
    family_situation: "",
    child: 0,
    address: "",
    city: "",
    zipcode: "",
    country: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    ApiHelper(`users/${user.id}`, "GET", null, token)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Not found");
        }
        return response.json();
      })
      .then((result) => {
        setPatientForm({
          gender: result.gender || "",
          birthdate: result.birthdate || "",
          family_situation: result.family_situation || "",
          child: result.child || 0,
          city: result.city || "",
          address: result.address || "",
          zipcode: result.zipcode || "",
          country: result.country || "",
        });
      })
      .catch(() => {});
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    let empty = 0;

    const values = Object.values(patientForm);
    values.forEach((value) => {
      if (value === "" || value === null) {
        empty += 1;
      }
    });

    const body = JSON.stringify(patientForm);

    await ApiHelper(`users/${user.id}`, "PUT", body, token)
      .then((response) => response.status)
      .then(async (status) => {
        if (status === 201) {
          await ApiHelper(
            `done-administrative/${doneAdministrative[0]?.id}`,
            "PUT",
            JSON.stringify({ is_checked: !empty }),
            token
          ).then(() => {
            setReload(!reload);
            return navigate("/patient/administrative");
          });
        }
      })
      .catch(() => {});
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h4" align="center">
          La fiche administrative
        </Typography>
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ mt: 1 }}
        onSubmit={handleSubmit}
      >
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group" required>
            Genre
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            row
            required
            value={patientForm.gender}
            onChange={(e) =>
              setPatientForm({ ...patientForm, gender: e.target.value })
            }
          >
            <FormControlLabel
              value="Female"
              control={<Radio />}
              label="Féminin"
            />
            <FormControlLabel
              value="Male"
              control={<Radio />}
              label="Masculin"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          label="Date de naissance"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          type="date"
          fullWidth
          required
          margin="normal"
          value={patientForm.birthdate}
          onChange={(e) =>
            setPatientForm({ ...patientForm, birthdate: e.target.value })
          }
        />
        <TextField
          label="Situation Familiale"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          type="text"
          fullWidth
          required
          margin="normal"
          value={patientForm.family_situation}
          onChange={(e) =>
            setPatientForm({ ...patientForm, family_situation: e.target.value })
          }
        />
        <TextField
          label="Nombre d'enfants"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          type="number"
          fullWidth
          required
          margin="normal"
          value={patientForm.child}
          onChange={(e) =>
            e.target.value >= 0 && e.target.value < 100
              ? setPatientForm({ ...patientForm, child: e.target.value })
              : null
          }
        />
        <TextField
          label="Adresse"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          type="text"
          fullWidth
          required
          margin="normal"
          value={patientForm.address}
          onChange={(e) =>
            setPatientForm({ ...patientForm, address: e.target.value })
          }
        />
        <TextField
          label="Ville"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          type="text"
          fullWidth
          required
          margin="normal"
          value={patientForm.city}
          onChange={(e) =>
            setPatientForm({ ...patientForm, city: e.target.value })
          }
        />
        <TextField
          label="Code postal"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          type="text"
          fullWidth
          required
          margin="normal"
          value={patientForm.zipcode}
          onChange={(e) =>
            setPatientForm({ ...patientForm, zipcode: e.target.value })
          }
        />
        <TextField
          label="Pays"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          type="text"
          fullWidth
          required
          margin="normal"
          value={patientForm.country}
          onChange={(e) =>
            setPatientForm({ ...patientForm, country: e.target.value })
          }
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            mt: 3,
            mb: 2,
            backgroundColor: "#6c5dd3",
            "&:hover": {
              backgroundColor: "#5e50b6",
            },
          }}
        >
          Envoyer
        </Button>
      </Box>
    </Container>
  );
}

export default PatientForm;
