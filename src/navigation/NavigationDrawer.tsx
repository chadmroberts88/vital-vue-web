import { PropsWithChildren } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import {
  Person,
  Hotel,
  Science,
  MedicalInformation,
  Medication,
} from "@mui/icons-material";

import { DRAWER_WIDTH } from "../global/Constants";
import DrawerHeader from "../components/DrawerHeader";
import DrawerListItem from "../components/DrawerListItem";

type NavigationDrawerProps = PropsWithChildren & {
  isOpen: boolean;
};

const NavigationDrawer = ({
  children,
  isOpen,
}: NavigationDrawerProps): JSX.Element => {
  return (
    <Box
      style={{
        height: "100%",
        display: "flex",
      }}
    >
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={isOpen}
      >
        <DrawerHeader />

        <Stack flex={1} direction="column" justifyContent="space-between">
          <List sx={{ p: 0 }}>
            <DrawerListItem text="Staff" icon={<Person />} />
            <DrawerListItem text="Patients" icon={<Hotel />} />
            <DrawerListItem text="Labs" icon={<Science />} />
            <DrawerListItem text="Procedures" icon={<MedicalInformation />} />
            <DrawerListItem text="Medications" icon={<Medication />} />
          </List>
          <Button sx={{ m: 2 }} variant="outlined">
            Log Out
          </Button>
        </Stack>
      </Drawer>
      {children}
    </Box>
  );
};

export default NavigationDrawer;
