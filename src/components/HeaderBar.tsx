import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

interface HeaderBarProps extends MuiAppBarProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const StyledHeaderBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<HeaderBarProps>(({ theme, isOpen }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(isOpen && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const HeaderBar = ({ isOpen, toggleDrawer }: HeaderBarProps) => {
  return (
    <StyledHeaderBar
      position="fixed"
      isOpen={isOpen}
      toggleDrawer={toggleDrawer}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          edge="start"
          sx={{ mr: 2, ...(isOpen && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Persistent drawer
        </Typography>
      </Toolbar>
    </StyledHeaderBar>
  );
};
export default HeaderBar;
