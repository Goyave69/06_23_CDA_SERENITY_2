import { Box, Typography } from "@mui/material";
import * as React from "react";
import {
  getNameOfDay,
  getNumOfDay,
  getMonth,
  getTime,
  daysUntilIntervention,
} from "../services/DateHelper";

export default function HeaderPatient({
  firstname,
  lastname,
  interventionDate,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        my: "10px",
      }}
    >
      <Box>
        <Typography variant="h6">
          Bonjour {firstname} {lastname}
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Comment allez-vous ?
        </Typography>
      </Box>
      {interventionDate && (
        <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
          <Box
            sx={{
              backgroundColor: "#ffebf6",
              width: 65,
              height: 65,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 3,
            }}
          >
            <Typography
              align="center"
              variant="caption"
              sx={{ color: "GrayText" }}
            >
              Jours
            </Typography>
            <Typography align="center" variant="h6" sx={{ fontWeight: 600 }}>
              {daysUntilIntervention(interventionDate)}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Ma chirurgie
            </Typography>
            <Typography variant="caption" sx={{ color: "GrayText" }}>
              {getNameOfDay(interventionDate)} {getNumOfDay(interventionDate)}{" "}
              {getMonth(interventionDate)}
            </Typography>
            <Box
              sx={{
                backgroundColor: "#6c5dd3",
                borderRadius: 2,
                width: "fit-content",
                px: "10px",
                py: "3px",
              }}
            >
              <Typography variant="body2" sx={{ color: "white" }}>
                {getTime(interventionDate)}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
