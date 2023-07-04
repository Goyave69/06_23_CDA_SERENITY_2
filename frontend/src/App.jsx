import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import Navigation from "./components/Navigation";
import CurrentUserContext, {
  useCurrentUserContext,
} from "./Context/UserContext";

function App() {
  const { user } = useCurrentUserContext(CurrentUserContext);
  return (
    <div>
      <Box sx={{ display: { xs: "none", sm: "initial" } }}>
        <Navigation />
      </Box>
      <Box
        sx={{
          marginLeft: { sm: 30 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Outlet />
      </Box>
    </div>
  );
}

export default App;
