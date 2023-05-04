import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
  WbSunny,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          {sidebarData.map((item) => (
            <ListItem disablePadding>
              <ListItemButton component="a" href={item.listItemhref}>
                <ListItemIcon>{item.listItemIcon}</ListItemIcon>
                <ListItemText primary={item.listItemText} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                {mode === "light" ? <WbSunny /> : <ModeNight />}
              </ListItemIcon>
              <ListItemText primary="Web Theme" />
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;

const sidebarData = [
  {
    listItemhref: "#home",
    listItemIcon: <Home />,
    listItemText: "Homepage",
  },
  {
    listItemhref: "#pages",
    listItemIcon: <Article />,
    listItemText: "Pages",
  },
  {
    listItemhref: "#groups",
    listItemIcon: <Group />,
    listItemText: "Groups",
  },
  {
    listItemhref: "#market",
    listItemIcon: <Storefront />,
    listItemText: "Marketplace",
  },
  {
    listItemhref: "#friends",
    listItemIcon: <Person />,
    listItemText: "Friends",
  },
  {
    listItemhref: "#settings",
    listItemIcon: <Settings />,
    listItemText: "Settings",
  },
  {
    listItemhref: "#profile",
    listItemIcon: <AccountBox />,
    listItemText: "Profile",
  },
];
