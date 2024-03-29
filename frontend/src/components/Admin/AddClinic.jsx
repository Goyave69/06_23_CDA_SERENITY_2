import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import { useNavigate } from "react-router-dom";

function AddClinic({ setClinics }) {
  const navigate = useNavigate();
  const [clinicData, setClinicData] = useState({
    name: "",
    address: "",
    city: "",
    free_parking: false,
    handicap_access: false,
    phone_number: "",
    zipcode: "",
    email: "",
    open_hours: null,
    close_hours: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClinicData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleTimeChange = (name, time) => {
    setClinicData((prevState) => ({
      ...prevState,
      [name]: time ? time.toJSON().slice(11, 16) : null,
    }));
  };
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setClinicData((prevState) => ({
      ...prevState,
      [name]: value === "oui",
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/clinics", clinicData)
      .then(() => {
        setClinicData({
          name: "",
          address: "",
          city: "",
          free_parking: false,
          handicap_access: false,
          phone_number: "",
          zipcode: "",
          email: "",
          open_hours: null,
          close_hours: null,
        });
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        marginLeft: "13%",
        marginTop: "10vh",
      }}
    >
      <Typography sx={{ marginBottom: 8 }} variant="h3" color="initial">
        Ajouter un cabinet
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box>
          <TextField
            name="name"
            placeholder="Nom"
            value={clinicData.name}
            onChange={handleChange}
            required
            margin="normal"
            fullWidth
          />
          <TextField
            variant="outlined"
            name="address"
            placeholder="Adresse"
            value={clinicData.address}
            onChange={handleChange}
            required
            margin="normal"
            fullWidth
          />
          <TextField
            name="city"
            placeholder="Ville"
            value={clinicData.city}
            onChange={handleChange}
            required
            margin="normal"
            fullWidth
          />
          <TextField
            name="email"
            placeholder="Email"
            value={clinicData.email}
            onChange={handleChange}
            required
            margin="normal"
            fullWidth
          />
        </Box>
        <Box sx={{ ml: 2 }}>
          <FormControl margin="normal" required sx={{ width: 150 }}>
            <InputLabel variant="filled" htmlFor="free_parking">
              Accès parking
            </InputLabel>
            <Select
              name="free_parking"
              value={clinicData.free_parking ? "oui" : "non"}
              onChange={handleSelectChange}
            >
              <MenuItem value="oui">Oui</MenuItem>
              <MenuItem value="non">Non</MenuItem>
            </Select>
          </FormControl>
          <FormControl margin="normal" required sx={{ width: 150 }}>
            <InputLabel htmlFor="handicap_access">Accès handicapé</InputLabel>
            <Select
              name="handicap_access"
              value={clinicData.handicap_access ? "oui" : "non"}
              onChange={handleSelectChange}
            >
              <MenuItem value="oui">Oui</MenuItem>
              <MenuItem value="non">Non</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box>
        <Box>
          <TextField
            name="phone_number"
            placeholder="Numéro de téléphone"
            value={clinicData.phone_number}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            sx={{ ml: 3 }}
            name="zipcode"
            placeholder="Code postal"
            value={clinicData.zipcode}
            onChange={handleChange}
            required
            margin="normal"
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <TimePicker
            sx={{ width: 222, mr: 3 }}
            label="Heure d'ouverture"
            value={clinicData.open_hours}
            onChange={(time) => handleTimeChange("open_hours", time)}
          />
          <TimePicker
            sx={{ width: 225 }}
            label="Heure de fermeture"
            value={clinicData.close_hours}
            onChange={(time) => handleTimeChange("close_hours", time)}
          />
        </Box>
      </Box>
      <Button
        sx={{ width: 250, mt: 5 }}
        type="submit"
        variant="contained"
        color="primary"
      >
        Ajouter
      </Button>
    </form>
  );
}
export default AddClinic;
