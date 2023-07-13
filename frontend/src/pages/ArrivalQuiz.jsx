import React, { useState } from "react";
import { Box, Typography } from "@mui/material/";

export default function ArrivalQuiz() {
  const [steps, setSteps] = useState(2);
  return (
    <Box
      sx={{
        width: "90%",
        backgroundColor: "#F6F4F4",
        marginTop: 3,
        borderRadius: 2,
        p: 2,
      }}
    >
      {steps === 1 && <p>AAAAAAAAAAAAAA</p>}
      {steps === 2 && <p>BBBBBBBBBBBBBBB</p>}
      {steps === 3 && <p>CCCCCCCCCCCCCCC</p>}
    </Box>
  );
}
