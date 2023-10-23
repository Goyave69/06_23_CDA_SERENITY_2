import CatDivImg from "@components/CatDivImg";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import { Link, Outlet, useOutlet, useOutletContext } from "react-router-dom";
import ApiHelper from "@services/ApiHelper";
import { useCurrentUserContext } from "../Context/UserContext";

const { VITE_BACKEND_URL } = import.meta.env;

export default function InfoOp() {
  const { token } = useCurrentUserContext();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [reload, setReload, interventionId] = useOutletContext();
  const [stepsInfo, setStepsInfo] = useState([]);
  const [selected, setSelected] = useState(-1);
  const hasOutlet = useOutlet();

  useEffect(() => {
    ApiHelper(
      `read-steps-infos/byInterventionId/${interventionId}`,
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
        setStepsInfo(result);
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
        border: !isMobile && `3px solid #F5D23F`,
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
          {stepsInfo &&
            stepsInfo.map((stepInfo, index) => (
              <Box
                component={Link}
                to="step-info"
                key={stepInfo.id}
                onClick={() => {
                  setSelected(index);
                }}
              >
                <CatDivImg
                  imgSrc={`${import.meta.env.VITE_BACKEND_URL}/uploads/${
                    stepInfo.image
                  }`}
                  done={!!stepInfo?.is_checked}
                />
                <Typography>{stepInfo.title}</Typography>
              </Box>
            ))}
        </Box>
      )}
      <Outlet context={[reload, setReload, stepsInfo[selected]]} />
    </Box>
  );
}
