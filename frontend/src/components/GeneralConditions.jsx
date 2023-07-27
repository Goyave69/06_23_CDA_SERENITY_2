import { Box, Checkbox, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import ApiHelper from "@services/ApiHelper";
import { useOutletContext } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useCurrentUserContext } from "../Context/UserContext";

export default function GeneralConditions() {
  const { token } = useCurrentUserContext();
  const [reload, setReload, doneAdministrative] = useOutletContext();
  const [checked, setChecked] = useState(
    !!doneAdministrative[2]?.isChecked || false
  );

  const handleCheckboxChange = () => {
    const data = JSON.stringify({ is_checked: !checked });
    ApiHelper(
      `done-administrative/${doneAdministrative[2]?.id}`,
      "PUT",
      data,
      token
    )
      .then(() => {
        setReload(!reload);
        return setChecked(!checked);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    setChecked(!!doneAdministrative[2]?.isChecked);
  }, [doneAdministrative]);

  const paperSX = {
    display: "flex",
    flexDirection: "row",
    marginTop: 2,
    padding: 1,
    cursor: "pointer",
    alignItems: "center",
    filter: checked && "opacity(75%)",
    justifyContent: "space-around",
    "&:hover": { backgroundColor: "#F8F8F8" },
    "&:active": { backgroundColor: "#F1F1F1" },
  };

  return (
    <Box>
      <Typography variant="h6">Règles de l'hôpital</Typography>
      <Typography>
        L'hôpital est un batiment avec ses propres règles. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Nulla consequatur perferendis minus
        aut voluptatibus vero voluptate cum eveniet optio magni! Obcaecati,
        reiciendis consequatur! Quidem, perferendis magni! Exercitationem cumque
        dolores quos.
      </Typography>
      <Paper sx={paperSX} onClick={handleCheckboxChange}>
        <Box>
          <Checkbox checked={checked} color="success" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "space-around",
            flex: "2 0 0",
          }}
        >
          <Typography
            sx={{ textDecoration: checked ? "line-through" : "none" }}
          >
            En cochant cette case, j'accepte les règles.
          </Typography>
        </Box>
        <ChevronRightIcon />
      </Paper>
    </Box>
  );
}
