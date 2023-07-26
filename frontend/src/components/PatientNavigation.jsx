import * as React from "react";
import { Box, Typography } from "@mui/material/";
import PatientButton from "@components/PatientButton";
import {
  Outlet,
  useLocation,
  useOutlet,
  Link,
  useNavigate,
} from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

import ApiHelper from "@services/ApiHelper";
import { useCurrentUserContext } from "../Context/UserContext";
import HeaderPatient from "./HeaderPatient";
import HeaderPatientMobile from "./HeaderPatientMobile";

const defaultProgression = {
  interventionId: 0,
  interventionDate: null,
  rsiDone: 0,
  rsiMax: 0,
  daDone: 0,
  daMax: 0,
  rapDone: 0,
  afiDone: 0,
  afiMax: 0,
  dclDone: 0,
  dclMax: 0,
};

export default function PatientNavigation() {
  const { user, token } = useCurrentUserContext();
  const [progression, setProgression] = React.useState(defaultProgression);
  const [reload, setReload] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    ApiHelper(`interventions/progression/${user.id}`, "GET", null, token)
      .then((response) => {
        if (response.status !== 200) {
          navigate("/no-intervention");
        }
        return response.json();
      })
      .then((result) => {
        setProgression(result);
      })
      .catch(() => {});
  }, [reload]);

  const hasOutlet = useOutlet();
  const isMobile = useMediaQuery("(max-width:600px)");

  const location = useLocation().pathname;
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "95vh",
        mb: 2,
      }}
    >
      {isMobile ? (
        <HeaderPatientMobile progression={progression} />
      ) : (
        <HeaderPatient
          firstname={user.firstname}
          lastname={user.lastname}
          interventionDate={progression.interventionDate}
        />
      )}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          borderTopLeftRadius: 34,
          borderTopRightRadius: 34,
        }}
      >
        {isMobile && hasOutlet && (
          <Typography
            sx={{ alignSelf: "flex-start", marginX: 3, marginY: 2 }}
            component={Link}
            to="/patient"
          >
            {"< "}
            Menu{" "}
          </Typography>
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <PatientButton
            color="#F5D23F"
            title="Comprendre mon opération"
            total={progression.rsiMax}
            done={progression.rsiDone}
            selected={(!hasOutlet && isMobile) || location.includes("info-op")}
            link="info-op"
          />
          <PatientButton
            color="#47CACF"
            title="Démarches administratives"
            total={progression.daMax}
            done={progression.daDone}
            selected={
              (!hasOutlet && isMobile) || location.includes("administrative")
            }
            link="administrative"
          />
          <PatientButton
            color="#FD93B8"
            title="Préparer mon arrivée"
            total={5}
            done={progression.rapDone}
            selected={(!hasOutlet && isMobile) || location.includes("prep")}
            link="prep"
          />
          <PatientButton
            color="#66E47A"
            title="Prendre rendez-vous"
            total={progression.afiMax}
            done={progression.afiDone}
            selected={(!hasOutlet && isMobile) || location.includes("take-rdv")}
            link="take-rdv"
          />
          <PatientButton
            color="#8D77F0"
            title="Check-list avant le départ"
            total={progression.dclMax}
            done={progression.dclDone}
            selected={
              (!hasOutlet && isMobile) || location.includes("checklist")
            }
            link="checklist"
          />
        </Box>
        <Outlet context={[reload, setReload, progression.interventionId]} />
      </Box>
    </Box>
  );
}
