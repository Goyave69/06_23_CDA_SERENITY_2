import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import CheckboxLabel from "../components/CheckboxLabel";
import ApiHelper from "../services/ApiHelper";
import { useCurrentUserContext } from "../Context/UserContext";

export default function Checklist() {
  const { token } = useCurrentUserContext();
  const [reload, setReload, interventionId] = useOutletContext();
  const [checklist, setChecklist] = useState();
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    ApiHelper(`done-check-list`, "GET", null, token)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Not found");
        }
        return response.json();
      })
      .then((result) => {
        setChecklist(result);
      })
      .catch(() => {});
  }, [interventionId]);

  return (
    <Box
      sx={{
        width: "90%",
        backgroundColor: !isMobile && "#F6F4F4",
        marginTop: 3,
        borderRadius: 4,
        p: 4,
        border: !isMobile && `3px solid #8D77F0`,
      }}
    >
      <Typography variant="h6">Checklist</Typography>
      <Grid container spacing={3}>
        {checklist &&
          checklist.map((check) => (
            <Grid key={check.id} item xs={12} sm={6} md={4}>
              <CheckboxLabel {...check} reload={reload} setReload={setReload} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
