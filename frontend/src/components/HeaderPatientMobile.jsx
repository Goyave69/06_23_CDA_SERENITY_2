import * as React from "react";
import { Avatar, Box, LinearProgress, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { getNumOfDay, getMonth, getTime } from "../services/DateHelper";
import { useCurrentUserContext } from "../Context/UserContext";

export default function HeaderPatient({ progression }) {
  const progressValue =
    ((Number(progression.rsiDone) +
      Number(progression.daDone) +
      Number(progression.rapDone) +
      Number(progression.afiDone) +
      Number(progression.dclDone)) /
      (Number(progression.rsiMax) +
        Number(progression.daMax) +
        5 +
        Number(progression.afiMax) +
        Number(progression.dclMax))) *
    100;

  const { user, setUser } = useCurrentUserContext();

  const navigate = useNavigate();

  const handleDisconnection = () => {
    console.warn(user);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser({});
    navigate("/login");
  };

  return (
    <Box
      sx={{
        width: "90%",
        my: "10px",
      }}
    >
      <LogoutIcon
        onClick={handleDisconnection}
        sx={{ position: "absolute", right: 10, color: "red" }}
      />
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", my: 2 }}>
        <Avatar
          alt={`${user.firstname} ${user.lastname}`}
          src="/src/assets/img/avatar.png"
        />
        <Box>
          <Typography>
            {user.firstname} {user.lastname}{" "}
          </Typography>
          <LinearProgressWithLabel progressValue={progressValue} />
        </Box>
      </Box>

      {progression.interventionDate && (
        <Box sx={{ display: "flex", gap: 4, justifyContent: "flex-end" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexDirection: "column",
            }}
          >
            <Typography variant="body2" sx={{ color: "#A69DF3" }}>
              Date
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#004F8B", fontWeight: "bold" }}
            >
              {getNumOfDay(progression.interventionDate)}{" "}
              {getMonth(progression.interventionDate)}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexDirection: "column",
            }}
          >
            <Typography variant="body2" sx={{ color: "#A69DF3" }}>
              Heure
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#004F8B", fontWeight: "bold" }}
            >
              {getTime(progression.interventionDate)}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}

function LinearProgressWithLabel({ progressValue }) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <LinearProgress
        variant="determinate"
        sx={{
          height: 30,
          width: 210,
          backgroundColor: `#f4f6fa`,
          "& .MuiLinearProgress-bar": {
            backgroundColor: progressValue >= 100 ? "#d5f993" : `#cbb7fd`,
          },
          borderRadius: 3,
        }}
        value={progressValue}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mx: "12px",
        }}
      >
        <Typography variant="body2" sx={{ fontSize: 11 }}>
          Préparation pour ma chirurgie
        </Typography>
        <Typography variant="caption">
          {`${Math.round(progressValue)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
