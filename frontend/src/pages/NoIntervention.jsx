import { Box, Typography } from "@mui/material";
import * as React from "react";

export default function NoIntervention() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" align="center">
        Vous n'avez pas de chirurgie de prévu ;
      </Typography>
    </Box>
  );
}
