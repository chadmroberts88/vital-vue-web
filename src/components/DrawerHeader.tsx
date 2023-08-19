import { IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Close } from "@mui/icons-material";
import { HEADER_HEIGHT } from "../global/Constants";

interface DrawerHeaderProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const StyledDrawerHeader = styled("div")(({ theme }) => ({
  width: "calc(100% - 20px)",
  minHeight: HEADER_HEIGHT - 20,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "10px",
}));

const DrawerHeader = ({
  isOpen,
  toggleDrawer,
}: DrawerHeaderProps): JSX.Element => {
  return (
    <StyledDrawerHeader>
      <Typography variant="h6">VitalVue</Typography>
      <IconButton
        color="inherit"
        onClick={toggleDrawer}
        sx={{ width: "40px", height: "40px" }}
      >
        <Close />
      </IconButton>
    </StyledDrawerHeader>
  );
};

export default DrawerHeader;
