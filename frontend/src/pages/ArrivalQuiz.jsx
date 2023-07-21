import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material/";

export default function ArrivalQuiz() {
  const [steps, setSteps] = useState(2);
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        width: "90%",
        backgroundColor: !isMobile && "#F6F4F4",
        marginTop: 3,
        borderRadius: 4,
        p: 4,
        border: !isMobile && `3px solid #FD93B8`,
      }}
    >
      {steps === 1 && <p>AAAAAAAAAAAAAA</p>}
      {steps === 2 && <p>BBBBBBBBBBBBBBB</p>}
      {steps === 3 && <p>CCCCCCCCCCCCCCC</p>}
    </Box>
  );
}
