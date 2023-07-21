import { Box, useMediaQuery } from "@mui/material";
import * as React from "react";

export default function Administrative() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        width: "90%",
        backgroundColor: !isMobile && "#F6F4F4",
        marginTop: 3,
        borderRadius: 4,
        p: 4,
        border: !isMobile && `3px solid #47CACF`,
      }}
    >
      <p>p2</p>
    </Box>
  );
}
