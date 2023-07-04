import * as React from "react";
import { Box, Typography } from "@mui/material/";
import PatientButton from "@components/PatientButton";
import { Outlet, useLocation, useOutlet, Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

// import { useCurrentUserContext } from "../Context/UserContext";

export default function PatientNavigation() {
  // const { user } = useCurrentUserContext();
  const hasOutlet = useOutlet();
  const isMobile = useMediaQuery("(max-width:600px)");

  const location = useLocation().pathname;

  return (
    <Box sx={{ width: "100%" }}>
      {isMobile && hasOutlet && (
        <Typography component={Link} to="/patient">
          {" "}
          Retour{" "}
        </Typography>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <PatientButton
          color="#F5D23F"
          title="Comprendre mon opération"
          total={9}
          done={8}
          selected={(!hasOutlet && isMobile) || location.includes("info-op")}
          link="info-op"
        />
        <PatientButton
          color="#47CACF"
          title="Démarche administrative"
          total={5}
          done={2}
          selected={
            (!hasOutlet && isMobile) || location.includes("administrative")
          }
          link="administrative"
        />
        <PatientButton
          color="#FD93B8"
          title="Préparer mon arrivée"
          total={8}
          done={3}
          selected={(!hasOutlet && isMobile) || location.includes("quiz")}
          link="quiz"
        />
        <PatientButton
          color="#66E47A"
          title="Prendre rendez-vous"
          total={5}
          done={2}
          selected={(!hasOutlet && isMobile) || location.includes("take-rdv")}
          link="take-rdv"
        />
        <PatientButton
          color="#8D77F0"
          title="Check-list avant le départ"
          total={5}
          done={2}
          selected={(!hasOutlet && isMobile) || location.includes("checklist")}
          link="checklist"
        />
      </Box>
      <Outlet />
    </Box>
  );
}
