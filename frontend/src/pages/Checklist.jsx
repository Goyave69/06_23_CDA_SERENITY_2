import { Grid, Typography } from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import CheckboxLabel from "../components/CheckboxLabel";
import ApiHelper from "../services/ApiHelper";
import { useCurrentUserContext } from "../Context/UserContext";

export default function Checklist() {
  const { token } = useCurrentUserContext();

  const [checklist, setChecklist] = useState();

  useEffect(() => {
    // ApiHelper(`done-check-list/byInterventionId/${interventionId}`, "GET", null, token)
    ApiHelper(`done-check-list/byInterventionId/1`, "GET", null, token)
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
  }, []);

  return (
    <>
      <Typography variant="h6">Checklist</Typography>
      <Grid container spacing={3}>
        {checklist &&
          checklist.map((check) => (
            <Grid key={check.id} item xs={12} sm={6} md={4}>
              <CheckboxLabel {...check} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}
