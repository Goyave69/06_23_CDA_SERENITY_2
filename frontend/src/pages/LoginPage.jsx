import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import jwt_decode from "jwt-decode";
import ApiHelper from "../services/ApiHelper";
import { useCurrentUserContext } from "../Context/UserContext";

function LoginPage() {
  const { setUser, setToken } = useCurrentUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // create data object with email and password
    const data = JSON.stringify({
      email,
      password,
    });

    // make sure email and password are not empty
    if (email && password) {
      // send data object to login endpoint
      await ApiHelper("login", "POST", data)
        .then((response) => response.json())
        .then((result) => {
          // decode token to get user data
          const { user } = jwt_decode(result.token);

          // set user state
          setUser(user);
          // set token state
          setToken(result.token);
        })
        .then(() => {
          // redirect to dashboard
          navigate("/dashboard");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h4" align="center">
          Bienvenue sur Serenity
        </Typography>
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ mt: 1 }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="E-mail"
          variant="outlined"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Mot de passe"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3, mb: 2 }}
        >
          Se connecter
        </Button>
      </Box>
    </Container>
  );
}

export default LoginPage;
