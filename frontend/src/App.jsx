import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Box sx={{ display: { xs: "none", sm: "initial" } }}>
        <Navigation />
      </Box>
      <Box
        sx={{
          marginLeft: { sm: 30 },
        }}
      >
        <Outlet />
      </Box>
    </div>
  );
}

export default App;
