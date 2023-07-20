import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { West, East } from "@mui/icons-material";
import { HEADER_HEIGHT } from "../global/Constants";

interface DrawerHeaderProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const StyledDrawerHeader = styled("div")(({ theme }) => ({
  minHeight: HEADER_HEIGHT,
  display: "flex",
  alignItems: "center",
}));

const DrawerHeader = ({
  isOpen,
  toggleDrawer,
}: DrawerHeaderProps): JSX.Element => {
  return (
    <StyledDrawerHeader>
      <IconButton color="inherit" onClick={toggleDrawer} sx={{ ml: "9px" }}>
        {isOpen ? <West /> : <East />}
      </IconButton>
    </StyledDrawerHeader>
  );
};

export default DrawerHeader;
