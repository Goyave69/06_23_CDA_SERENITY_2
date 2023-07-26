import React, { useEffect, useState } from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material/";
import { useOutletContext } from "react-router-dom";
import ApiHelper from "@services/ApiHelper";
import { useCurrentUserContext } from "../Context/UserContext";

export default function ArrivalQuiz() {
  const { token } = useCurrentUserContext();
  const [steps, setSteps] = useState(1);
  const isMobile = useMediaQuery("(max-width:600px)");
  const [reload, setReload, interventionId] = useOutletContext();
  const [id, setId] = useState();

  useEffect(() => {
    ApiHelper(
      `read-arrival-preparation/byInterventionId/${interventionId}`,
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
        setId(result.id);
        setSteps(result.steps === 0 ? 0 : result.steps + 1);
      })
      .catch(() => {});
  }, [interventionId]);

  function handleNextSteps() {
    const data = JSON.stringify({ steps });
    ApiHelper(`read-arrival-preparation/${id}`, "PUT", data, token)
      .then(() => {
        setReload(!reload);
        return setSteps(steps + 1);
      })
      .catch((err) => {
        console.error(err);
      });
    // steps <= 5 && setSteps(steps + 1)
  }

  const styles = {
    img: {
      maxWidth: "45%",
      display: isMobile && "none",
      height: "auto",
    },
    text: {
      my: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 2,
    },
  };

  return (
    <Box
      sx={{
        width: "90%",
        backgroundColor: !isMobile && "#F6F4F4",
        marginTop: 3,
        borderRadius: 4,
        p: 4,
        border: !isMobile && `3px solid #FD93B8`,
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-around", gap: 2, mb: 4 }}
      >
        {steps === 1 && (
          <>
            <img
              alt="BoutonAppel"
              src="https://mca-solutions.fr/wp-content/uploads/2021/02/EZ-127-5640.png"
              style={styles.img}
            />
            <Box sx={styles.text}>
              <Typography variant="h4">Le bouton d'appel</Typography>
              <Typography>
                Ce bouton rouge sert à appeler une infirmière en cas de besoin.
                Attention, les infirmières ont plusieurs personnes à s'oocuper.
                Cela peut donc prendre quelques instants pour leur arrivée.
              </Typography>
            </Box>
          </>
        )}
        {steps === 2 && (
          <>
            <img
              alt="LunettesO²"
              src="https://img.passeportsante.net/1200x675/2021-06-03/i107926-.webp"
              style={styles.img}
            />
            <Box sx={styles.text}>
              <Typography variant="h4">Les lunettes à oxygène</Typography>
              <Typography>
                Les lunettes à oxygène sont un mode d'administration de
                l'oxygène médical. Elles sont utilisées lorsque il y a un besoin
                faible à modéré d'oxygène.
              </Typography>
            </Box>
          </>
        )}
        {steps === 3 && (
          <>
            <img
              alt="BoutonAppel"
              src="https://mca-solutions.fr/wp-content/uploads/2021/02/EZ-127-5640.png"
              style={styles.img}
            />
            <Box sx={styles.text}>
              <Typography variant="h4">Le bouton d'appel 3</Typography>
              <Typography>
                Ce bouton rouge sert à appeler une infirmière en cas de besoin.
                Attention, les infirmières ont plusieurs personnes à s'oocuper.
                Cela peut donc prendre quelques instants pour leur arrivée.
              </Typography>
            </Box>
          </>
        )}
        {steps === 4 && (
          <>
            <img
              alt="BoutonAppel"
              src="https://mca-solutions.fr/wp-content/uploads/2021/02/EZ-127-5640.png"
              style={styles.img}
            />
            <Box sx={styles.text}>
              <Typography variant="h4">Le bouton d'appel 4</Typography>
              <Typography>
                Ce bouton rouge sert à appeler une infirmière en cas de besoin.
                Attention, les infirmières ont plusieurs personnes à s'oocuper.
                Cela peut donc prendre quelques instants pour leur arrivée.
              </Typography>
            </Box>
          </>
        )}
        {steps === 5 && (
          <>
            <img
              alt="BoutonAppel"
              src="https://mca-solutions.fr/wp-content/uploads/2021/02/EZ-127-5640.png"
              style={styles.img}
            />
            <Box sx={styles.text}>
              <Typography variant="h4">Le bouton d'appel 5</Typography>
              <Typography>
                Ce bouton rouge sert à appeler une infirmière en cas de besoin.
                Attention, les infirmières ont plusieurs personnes à s'oocuper.
                Cela peut donc prendre quelques instants pour leur arrivée.
              </Typography>
            </Box>
          </>
        )}
        {steps > 5 && (
          <Box sx={styles.text}>
            <Typography variant="h4">Vous avez terminé !!!</Typography>
          </Box>
        )}
      </Box>
      {steps <= 5 && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => handleNextSteps()}
            variant="contained"
            sx={{
              backgroundColor: "#6c5dd3",
              "&:hover": {
                backgroundColor: "#5e50b6",
              },
            }}
          >
            Suivant
          </Button>
        </Box>
      )}
    </Box>
  );
}
