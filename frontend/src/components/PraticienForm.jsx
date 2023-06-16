import React from "react";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";

function PraticienForm() {
  const Style = {
    HelloDoctor: {
      position: "absolute",
      width: "580px",
      height: "99px",
      left: "317px",
      top: "48px",
    },

    FormContainer: {
      position: "absolute",
      width: "1024px",
      height: "2341px",
      left: "356px",
      top: "299px",
      backgroundColor: "lightgray",
    },
    FormSection: {
      position: "absolute",
      width: "647px",
      height: "100px",
      left: "356px",
      top: "377px",
    },
    SegmentPhoto: {
      display: "flex",
      alignItems: "center",
    },
    ButtonNewPhoto: {
      borderRadius: 5,
      width: 200,
    },
  };
  return (
    <div>
      <h2 style={Style.HelloDoctor}>Bonjour Docteur Sahrane</h2>
      <div style={Style.FormContainer}>
        <div>Section Button</div>
        <p>Votre Photo</p>
        <div style={Style.SegmentPhoto}>
          <div>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 80, height: 80, marginRight: "2rem" }}
            />
          </div>
          <div>
            <Button sx={Style.ButtonNewPhoto} variant="contained">
              Nouvelle Photo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PraticienForm;
