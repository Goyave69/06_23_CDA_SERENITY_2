import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { NavLink } from "react-router-dom/dist";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import CardMedia from "@mui/material/CardMedia";

import UserInfo from "./UserInfo";

const drawerWidth = 240;

export default function Navigation() {
  return (
    <Box>
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
          <CardMedia
            title="logo"
            image="src/assets/img/serenity.png"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {},
              [theme.breakpoints.up("md")]: {
                width: "55px",
                objectFit: "cover",
                height: "50px",
                borderRadius: 4,
                m: 2,
              },
            })}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {},
              [theme.breakpoints.up("md")]: {
                height: "42px",
                ml: 1,
              },
            })}
          >
            Serenity
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          <ListItem key="Dashboard">
            <NavLink to="/dashboard">
              <ListItemButton>
                <DashboardCustomizeIcon />
                <ListItemText primary="Dashboard" sx={{ ml: 1 }} />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem key="Praticiens">
            <NavLink to="/gestion-praticiens">
              <ListItemButton>
                <DashboardCustomizeIcon />
                <ListItemText primary="Praticiens" sx={{ ml: 1 }} />
              </ListItemButton>
            </NavLink>
          </ListItem>
          {/* Ajouter la liste si dessous commentée en adaptant pour crée un lien sur la navigation */}
          {/* <ListItem key="login">
            <NavLink to="/login">
              <ListItemButton>
                <DashboardCustomizeIcon />
                <ListItemText primary="login" sx={{ ml: 1 }} />
              </ListItemButton> */}
          {/* </NavLink> */}
          {/* </ListItem> */}
        </List>
      </Drawer>
      <UserInfo />
    </Box>
  );
}
