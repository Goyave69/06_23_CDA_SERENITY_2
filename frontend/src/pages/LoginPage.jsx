import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { Container, Typography, TextField, Button, Box } from "@mui/material";
import jwt_decode from "jwt-decode";
import ApiHelper from "../services/ApiHelper";
import { useCurrentUserContext } from "../Context/UserContext";
import logo from "../assets/img/logo3.svg";

function LoginPage() {
  const { user, setUser, setToken } = useCurrentUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (user.roles) {
      if (user.roles === 1) {
        navigate("/patient");
      } else {
        navigate("/dashboard");
      }
    }
  }, [user]);

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
          const { user: connectUser } = jwt_decode(result.token);

          // set user state
          setUser(connectUser);
          // set token state
          setToken(result.token);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="h-[100vh]">
      <div className="flex">
        <div
          className="flex flex-col h-[100vh] w-[50vw]  items-center bg-cyan-800
      "
        >
          <h3 className="text-5xl mt-10 mb-[12rem] text-white">
            Bienvenue chez Serenity
          </h3>

          <h2 className="text-4xl font-bold text-cyan-200 mb-10 ">
            Connectez-vous
          </h2>

          <form
            className=" w-96"
            component="form"
            noValidate
            autoComplete="off"
            sx={{ mt: 1 }}
            onSubmit={handleSubmit}
          >
            <p className="text-white ml-2 font-medium">Adresse e-mail</p>
            <input
              className="h-12 w-96 mb-5 rounded-md px-2"
              placeholder="dupont@exemple.fr"
              label="E-mail"
              variant="outlined"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-white ml-2 font-medium">Mot de passe</p>

            <input
              className="h-12 w-96 rounded-md px-2"
              placeholder="Mot de passe"
              label="Mot de passe"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-center">
              <button
                className="w-44 p-3 mt-5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md"
                type="submit"
              >
                Se connecter
              </button>
            </div>
            <p className="mt-6 text-white text-center">
              Vous n'avez pas de compte ?
              <NavLink to="/sign-up">
                <span className="text-cyan-200 underline"> Inscrivez-vous</span>
              </NavLink>
            </p>
          </form>
        </div>
        <div className=" bg-bgLogin w-[50vw] h-[auto] bg-cover flex flex-col justify- items-center" />
      </div>
    </div>
  );
}

export default LoginPage;
