import { Box } from "@mui/material";
import DoneTag from "./DoneTag";

export default function CatDivImg({ imgSrc, done = false }) {
  return (
    <Box sx={{ position: "relative" }}>
      <img
        src={imgSrc}
        alt="img"
        style={{
          borderRadius: "20px",
          width: "170px",
        }}
      />
      {done && <DoneTag />}
    </Box>
  );
}
