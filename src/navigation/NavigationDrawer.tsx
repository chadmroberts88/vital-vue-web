import { PropsWithChildren } from "react";
import { CSSObject, Theme, styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import {
  Person,
  Hotel,
  Science,
  MedicalInformation,
  Medication,
  Logout,
} from "@mui/icons-material";

import { DRAWER_WIDTH } from "../global/Constants";
import DrawerHeader from "../components/DrawerHeader";
import DrawerListItem from "../components/DrawerListItem";

type NavigationDrawerProps = PropsWithChildren & {
  isOpen: boolean;
  toggleDrawer: () => void;
};

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) =>
    !["isOpen", "toggleDrawer"].includes(prop.toString()),
})<NavigationDrawerProps>(({ theme, isOpen }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(isOpen && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!isOpen && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const NavigationDrawer = ({
  children,
  isOpen,
  toggleDrawer,
}: NavigationDrawerProps): JSX.Element => {
  return (
    <Box
      style={{
        height: "100%",
      }}
    >
      <MuiDrawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer}
        PaperProps={{ sx: { width: "200px" } }}
      >
        <DrawerHeader isOpen={isOpen} toggleDrawer={toggleDrawer} />
        <Stack flex={1} direction="column" justifyContent="space-between">
          <List sx={{ p: 0 }}>
            <DrawerListItem text="Staff" icon={<Person />} />
            <DrawerListItem text="Patients" icon={<Hotel />} />
            <DrawerListItem text="Labs" icon={<Science />} />
            <DrawerListItem text="Procedures" icon={<MedicalInformation />} />
            <DrawerListItem text="Medications" icon={<Medication />} />
          </List>
          <DrawerListItem text="Log Out" icon={<Logout />} />
        </Stack>
      </MuiDrawer>
      {children}
    </Box>
  );
};

export default NavigationDrawer;
