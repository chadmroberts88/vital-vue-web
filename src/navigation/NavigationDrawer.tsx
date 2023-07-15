import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import PersonIcon from "@mui/icons-material/Person";
import HotelIcon from "@mui/icons-material/Hotel";
import ScienceIcon from "@mui/icons-material/Science";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import MedicationIcon from "@mui/icons-material/Medication";

import { DRAWER_WIDTH } from "../global/Constants";
import DrawerHeader from "../components/DrawerHeader";
import DrawerListItem from "../components/DrawerListItem";
import { Button, Stack } from "@mui/material";

type NavigationDrawerProps = PropsWithChildren & {
  isOpen: boolean;
};

const NavigationDrawer = ({
  children,
  isOpen,
}: NavigationDrawerProps): JSX.Element => {
  return (
    <Box sx={{ display: "flex" }}>
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
        <Divider />

        <Stack flex={1} direction="column" justifyContent="space-between">
          <List sx={{ p: 0 }}>
            <DrawerListItem text="Staff" icon={<PersonIcon />} />
            <DrawerListItem text="Patients" icon={<HotelIcon />} />
            <DrawerListItem text="Labs" icon={<ScienceIcon />} />
            <DrawerListItem
              text="Procedures"
              icon={<MedicalInformationIcon />}
            />
            <DrawerListItem text="Medications" icon={<MedicationIcon />} />
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
