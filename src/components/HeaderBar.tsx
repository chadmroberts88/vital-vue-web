import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { AccountCircle, Notifications, West, East } from "@mui/icons-material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import { DRAWER_WIDTH } from "../global/Constants";
import Badge from "@mui/material/Badge";

interface HeaderBarProps extends MuiAppBarProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const StyledHeaderBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) =>
    !["isOpen", "toggleDrawer"].includes(prop.toString()),
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
          {isOpen ? <West /> : <East />}
        </IconButton>
        <div>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <Notifications />
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
