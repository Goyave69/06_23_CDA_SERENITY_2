import React, { useState } from "react";
import { Box } from "@mui/material/";

export default function ArrivalQuiz() {
  const [steps, setSteps] = useState(2);
  return (
    <Box>
      {steps === 1 && <p>AAAAAAAAAAAAAA</p>}
      {steps === 2 && <p>BBBBBBBBBBBBBBB</p>}
      {steps === 3 && <p>CCCCCCCCCCCCCCC</p>}
    </Box>
  );
}
