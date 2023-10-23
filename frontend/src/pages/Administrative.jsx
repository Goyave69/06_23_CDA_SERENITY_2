import CatDivImg from "@components/CatDivImg";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, Outlet, useOutlet, useOutletContext } from "react-router-dom";
import ApiHelper from "@services/ApiHelper";
import { useCurrentUserContext } from "../Context/UserContext";

export default function Administrative() {
  const { token } = useCurrentUserContext();
  const [reload, setReload, interventionId] = useOutletContext();
  const [doneAdministrative, setDoneAdministrative] = useState([]);
  const isMobile = useMediaQuery("(max-width:600px)");
  const hasOutlet = useOutlet();

  useEffect(() => {
    ApiHelper(
      `done-administrative/byInterventionId/${interventionId}`,
      "GET",
      null,
      token
    )
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Not found");
        }
        return response.json();
      })
      .then((result) => {
        setDoneAdministrative(result);
      })
      .catch(() => {});
  }, [interventionId, reload]);

  return (
    <Box
      sx={{
        width: "90%",
        backgroundColor: !isMobile && "#F6F4F4",
        marginTop: 2,
        borderRadius: 4,
        p: 4,
        border: !isMobile && `3px solid #47CACF`,
      }}
    >
      {hasOutlet ? (
        <Box sx={{ mx: 1, mb: 2 }}>
          <Typography component={Link} to=".">
            {"< "}
            Retour{" "}
          </Typography>
        </Box>
      ) : (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          <Box component={Link} to="patient-form">
            <CatDivImg
              imgSrc="/src/assets/administrative/administrative1.png"
              done={!!doneAdministrative[0]?.isChecked}
            />
            <Typography>Fiche Administrative</Typography>
            <Typography variant="caption" sx={{ color: "GrayText" }}>
              15 minutes
            </Typography>
          </Box>
          <Box component={Link} to="agreement">
            <CatDivImg
              imgSrc="/src/assets/administrative/administrative2.png"
              done={!!doneAdministrative[1]?.isChecked}
            />
            <Typography>Consentement</Typography>
            <Typography variant="caption" sx={{ color: "GrayText" }}>
              3 minuntes
            </Typography>
          </Box>
          <Box component={Link} to="conditions">
            <CatDivImg
              imgSrc="/src/assets/administrative/administrative3.png"
              done={!!doneAdministrative[2]?.isChecked}
            />
            <Typography>Règles de l'hôpital</Typography>
            <Typography variant="caption" sx={{ color: "GrayText" }}>
              5 minuntes
            </Typography>
          </Box>
        </Box>
      )}
      <Outlet context={[reload, setReload, doneAdministrative]} />
    </Box>
  );
}
