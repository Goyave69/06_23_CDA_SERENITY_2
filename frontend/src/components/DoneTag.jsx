import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function DoneTag() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "8px",
        display: "flex",
        p: 1,
        width: "70px",
        position: "absolute",
        left: 90,
        top: 10,
      }}
    >
      <CheckCircleIcon sx={{ color: "#079FA5", fontSize: 18 }} />
      <Typography variant="body2" sx={{ color: "#079FA5", fontWeight: "600" }}>
        Fait !
      </Typography>
    </Box>
  );
}
