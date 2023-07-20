import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Paper, Box, Typography } from "@mui/material";
import ApiHelper from "@services/ApiHelper";
import { useCurrentUserContext } from "../Context/UserContext";

export default function CheckboxLabel({ id, name, subtext, is_checked }) {
  const { token } = useCurrentUserContext();
  const [checked, setChecked] = React.useState(!!is_checked);

  const handleCheckboxChange = () => {
    const data = JSON.stringify({ is_checked: !checked });
    ApiHelper(`done-check-list/${id}`, "PUT", data, token)
      .then((response) => {
        return setChecked(!checked);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const paperSX = {
    display: "flex",
    flexDirection: "row",
    padding: 1,
    cursor: "pointer",
    alignItems: "center",
    filter: checked && "opacity(75%)",
    justifyContent: "space-around",
    "&:hover": { backgroundColor: "#F8F8F8" },
    "&:active": { backgroundColor: "#F1F1F1" },
  };

  return (
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
        <Typography sx={{ textDecoration: checked ? "line-through" : "none" }}>
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="GrayText"
          sx={{ fontStyle: "italic" }}
        >
          {subtext}
        </Typography>
      </Box>
      <ChevronRightIcon />
    </Paper>
  );
}
