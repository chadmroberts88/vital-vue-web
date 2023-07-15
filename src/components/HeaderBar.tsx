import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Close from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { DRAWER_WIDTH } from "../global/Constants";
import Badge from "@mui/material/Badge";

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
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: `${DRAWER_WIDTH}px`,
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
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          edge="start"
          sx={{ mr: 2 }}
        >
          {isOpen ? <Close /> : <MenuIcon />}
        </IconButton>
        <div>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton size="large" color="inherit">
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </StyledHeaderBar>
  );
};
export default HeaderBar;
