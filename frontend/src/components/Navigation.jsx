import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { useNavigate } from "react-router-dom/dist";
import CurrentUserContext, {
  useCurrentUserContext,
} from "../Context/UserContext";

const drawerWidth = 240;

export default function Navigation() {
  const { user, setUser } = useCurrentUserContext(CurrentUserContext);

  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  const handleDisconnection = () => {
    console.warn(user);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser({});
    handleNavigate("/login");
  };

  console.warn(user);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Serenity
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          <ListItem
            onClick={() => handleNavigate("/dashboard")}
            key="Dashboard"
            disablePadding
          >
            <ListItemButton>
              <InboxIcon />
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="bottom"
      >
        {!user.email ? (
          <List>
            <ListItem
              onClick={() => handleNavigate("/login")}
              key="login"
              disablePadding
            >
              <ListItemButton>
                <InboxIcon />
                <ListItemText primary="login" />
              </ListItemButton>
            </ListItem>
          </List>
        ) : (
          <ListItem
            onClick={() => handleNavigate("/login")}
            key="login"
            disablePadding
          >
            <ListItemButton>
              <ListItemText
                onClick={handleDisconnection}
                primary="Disconnect"
              />
            </ListItemButton>
          </ListItem>
        )}
        {user.email ? `${user.lastname} ${user.firstname}` : null}
      </Drawer>
    </Box>
  );
}
