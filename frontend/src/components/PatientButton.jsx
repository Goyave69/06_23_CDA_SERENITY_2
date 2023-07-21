import * as React from "react";
import { Box, Paper, CircularProgress, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import { useCurrentUserContext } from "../Context/UserContext";

function CircularProgressWithLabel({ sx, total, done }) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: "lightgrey",
        }}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        sx={{
          ...sx,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
        }}
        value={(done / total) * 100}
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
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${done}/${total}`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function PatientButton({
  title,
  color,
  selected,
  link,
  total,
  done,
}) {
  const style = {
    height: { xs: 80, sm: 170 },
    width: { xs: 280, sm: 170 },
    display: { xs: selected ? "flex" : "none", sm: "flex" },
    justifyContent: { xs: "space-between", sm: "space-evenly" },
    alignItems: "center",
    flexDirection: { xs: "row-reverse", sm: "column" },
    border: {
      xs: `5px solid ${color}`,
      sm: selected ? `5px solid ${color}` : "none",
    },
    margin: 1,
    padding: 2,
    backgroundColor: "#F6F4F4",
    "&:hover": { backgroundColor: "#F1F1F1" },
    "&:active": { backgroundColor: "#ECECEC" },
    borderRadius: 5,
  };
  // const { user } = useCurrentUserContext();
  return (
    <Paper elevation={1} sx={style} component={Link} to={link}>
      <CircularProgressWithLabel sx={{ color }} total={total} done={done} />
      <Typography
        sx={{ textAlign: "center", typography: { sm: "body1", xs: "body2" } }}
      >
        {title}
      </Typography>
    </Paper>
  );
}

// PatientButton.propTypes = {
//     color: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     progression: PropTypes.number.isRequired,
// };
