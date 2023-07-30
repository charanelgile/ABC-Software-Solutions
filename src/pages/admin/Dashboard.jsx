// Library Imports
import React, { useContext } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronLeft,
  faBolt,
  faLinesLeaning,
  faCheckDouble,
  faMoon,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFolderClosed,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

// Component Imports
import AdminLogin from "../../components/admin/AdminLogin";
import AdminSignUp from "../../components/admin/AdminSignUp";
import AdminHeader from "../../components/admin/AdminHeader";
import DisplaySubscriptions from "../../components/admin/DisplaySubscriptions";
import DisplayContactForms from "../../components/admin/DisplayContactForms";
import CompletedContactForms from "../../components/admin/CompletedContactForms";

// Context Imports
import { AllAdminsContext } from "../../contexts/admin/AllAdminsContext";
import { CurrentAdminContext } from "../../contexts/admin/CurrentAdminContext";

// Others
import "../../styles/stylesDashboard.css";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Dashboard = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // -----------------------------------------------

  const { allAdmins } = useContext(AllAdminsContext);
  const { currentAdmin } = useContext(CurrentAdminContext);

  return (
    <div>
      {allAdmins.length === 0 ? (
        <AdminSignUp />
      ) : currentAdmin.length === 0 ? (
        <AdminLogin />
      ) : (
        <div className="bg-dark text-light">
          {/* <AdminHeader /> */}

          <Box sx={{ display: "flex" }}>
            {/* <CssBaseline /> */}
            <AppBar
              position="fixed"
              open={open}
              className="bg-primary">
              <Toolbar>
                <IconButton
                  aria-label="open drawer"
                  className="text-light"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{
                    marginRight: 3,
                    ...(open && { display: "none" }),
                  }}>
                  <p id="btnDashboardNavBurger">
                    <FontAwesomeIcon icon={faBars} />
                  </p>
                </IconButton>

                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  className="fw-bold">
                  ABC Software Solutions - Admin Dashboard
                </Typography>
              </Toolbar>
            </AppBar>

            <Drawer
              variant="permanent"
              open={open}
              className="bg-dark-midtone text-light">
              <DrawerHeader className="bg-dark-midtone">
                <IconButton
                  onClick={handleDrawerClose}
                  className="text-light">
                  {theme.direction === "rtl" ? (
                    <FontAwesomeIcon icon={faChevronLeft} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronLeft} />
                  )}
                </IconButton>
              </DrawerHeader>

              <List className="bg-dark-midtone text-primary">
                {[
                  "Overview",
                  "Submitted Forms",
                  "Completed Forms",
                  "New Subscriptions",
                ].map((text, index) => (
                  <ListItem
                    key={text}
                    disablePadding
                    sx={{ display: "block" }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}>
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}>
                        {index === 0 ? (
                          <p className="sidePanelIcons text-primary">
                            <FontAwesomeIcon icon={faBolt} />
                          </p>
                        ) : index === 1 ? (
                          <p className="sidePanelIcons text-primary">
                            <FontAwesomeIcon icon={faLinesLeaning} />
                          </p>
                        ) : index === 2 ? (
                          <p className="sidePanelIcons text-primary">
                            <FontAwesomeIcon icon={faCheckDouble} />
                          </p>
                        ) : (
                          <p className="sidePanelIcons text-primary">
                            <FontAwesomeIcon icon={faFolderClosed} />
                          </p>
                        )}
                      </ListItemIcon>

                      <ListItemText
                        primary={text}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>

              <hr className="opacity-75" />

              <List className="bg-dark-midtone text-primary">
                {["Switch Theme", "Edit Admin Account", "Logout"].map(
                  (text, index) => (
                    <ListItem
                      key={text}
                      disablePadding
                      sx={{ display: "block" }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}>
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}>
                          {index === 0 ? (
                            <p className="sidePanelIcons text-primary">
                              <FontAwesomeIcon icon={faMoon} />
                            </p>
                          ) : index === 1 ? (
                            <p className="sidePanelIcons text-primary">
                              <FontAwesomeIcon icon={faUser} />
                            </p>
                          ) : (
                            <p className="sidePanelIcons text-primary">
                              <FontAwesomeIcon
                                icon={faArrowRightToBracket}
                              />
                            </p>
                          )}
                        </ListItemIcon>

                        <ListItemText
                          primary={text}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </ListItem>
                  )
                )}
              </List>
            </Drawer>

            <Box
              id="boxDashboard"
              component="main"
              sx={{ flexGrow: 1, p: 3 }}
              className="text-light">
              <DrawerHeader />

              <DisplayContactForms />

              <CompletedContactForms />

              <DisplaySubscriptions />
              {/* <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Rhoncus dolor purus non enim praesent elementum
                facilisis leo vel. Risus at ultrices mi tempus imperdiet.
                Semper risus in hendrerit gravida rutrum quisque non
                tellus. Convallis convallis tellus id interdum velit
                laoreet id donec ultrices. Odio morbi quis commodo odio
                aenean sed adipiscing. Amet nisl suscipit adipiscing
                bibendum est ultricies integer quis. Cursus euismod quis
                viverra nibh cras. Metus vulputate eu scelerisque felis
                imperdiet proin fermentum leo. Mauris commodo quis
                imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
                vivamus at augue. At augue eget arcu dictum varius duis at
                consectetur lorem. Velit sed ullamcorper morbi tincidunt.
                Lorem donec massa sapien faucibus et molestie ac.
              </Typography>
              <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla
                est ullamcorper eget nulla facilisi etiam dignissim diam.
                Pulvinar elementum integer enim neque volutpat ac
                tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                tellus. Purus sit amet volutpat consequat mauris. Elementum
                eu facilisis sed odio morbi. Euismod lacinia at quis risus
                sed vulputate odio. Morbi tincidunt ornare massa eget
                egestas purus viverra accumsan in. In hendrerit gravida
                rutrum quisque non tellus orci ac. Pellentesque nec nam
                aliquam sem et tortor. Habitant morbi tristique senectus
                et. Adipiscing elit duis tristique sollicitudin nibh sit.
                Ornare aenean euismod elementum nisi quis eleifend. Commodo
                viverra maecenas accumsan lacus vel facilisis. Nulla
                posuere sollicitudin aliquam ultrices sagittis orci a.
              </Typography> */}
            </Box>
          </Box>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
