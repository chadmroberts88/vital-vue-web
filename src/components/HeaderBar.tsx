import { styled } from "@mui/material/styles";
import { AccountCircle, Notifications } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { Button } from "@mui/material";
import { HEADER_HEIGHT } from "../global/Constants";

interface HeaderBarProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const StyledHeaderBar = styled("div", {
  shouldForwardProp: (prop) =>
    !["isOpen", "toggleDrawer"].includes(prop.toString()),
})<HeaderBarProps>(({ theme, isOpen }) => ({
  minHeight: HEADER_HEIGHT,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "18px",
  paddingRight: "18px",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(isOpen && {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const HeaderBar = ({ isOpen, toggleDrawer }: HeaderBarProps) => {
  return (
    <StyledHeaderBar isOpen={isOpen} toggleDrawer={toggleDrawer}>
      <Button onClick={toggleDrawer}>Open</Button>
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
    </StyledHeaderBar>
  );
};
export default HeaderBar;
