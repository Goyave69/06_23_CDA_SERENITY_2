import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import * as React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import ApiHelper from "@services/ApiHelper";
import { useCurrentUserContext } from "../Context/UserContext";

export default function StepInfo() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { token } = useCurrentUserContext();
  const [reload, setReload, stepInfo = false] = useOutletContext();
  const navigate = useNavigate();

  if (!stepInfo) {
    navigate("/patient/info-op");
  }

  function handleRead(id) {
    const data = JSON.stringify({ is_checked: true });
    ApiHelper(`read-steps-infos/${id}`, "PUT", data, token)
      .then(() => {
        return setReload(!reload);
      })
      .then(() => {
        return navigate("/patient/info-op");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-around", gap: 2, mb: 4 }}
    >
      <img
        alt={stepInfo.title}
        src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${stepInfo.image}`}
        style={{
          maxWidth: "45%",
          display: isMobile && "none",
          height: "auto",
        }}
      />
      <Box
        sx={{
          my: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h4">{stepInfo.title}</Typography>
        <Typography>{stepInfo.description}</Typography>
        <Button
          onClick={() => handleRead(stepInfo.id)}
          variant="contained"
          sx={{
            backgroundColor: "#6c5dd3",
            "&:hover": {
              backgroundColor: "#5e50b6",
            },
          }}
        >
          Lu
        </Button>
      </Box>
    </Box>
  );
}
