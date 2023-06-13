import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  CardMedia,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import LogoutIcon from "@mui/icons-material/Logout";
import CurrentUserContext, {
  useCurrentUserContext,
} from "../Context/UserContext";

function UserInfo() {
  const { user, setUser } = useCurrentUserContext(CurrentUserContext);
  const drawerWidth = 240;

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
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          border: "none",
          borderRight: "1px solid rgba(0,0,0,0.1)",
        },
      }}
      variant="permanent"
      anchor="bottom"
    >
      {user.email ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            my: 2,
            width: "100%",
          }}
        >
          <CardMedia
            title="logo"
            image="src/assets/img/avatar.png"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {},
              [theme.breakpoints.up("md")]: {
                width: "55px",
                objectFit: "cover",
                height: "55px",
                borderRadius: 4,
              },
            })}
          />
          <Typography variant="p">
            {`${user.lastname} ${user.firstname}`}
          </Typography>
          {!user.email ? null : (
            <LogoutIcon onClick={handleDisconnection} color="error" />
          )}
        </Box>
      ) : (
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
      )}
    </Drawer>
  );
}

export default UserInfo;
