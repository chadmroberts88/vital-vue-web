import React, { PropsWithChildren } from "react";
import { styled } from "@mui/material/styles";

const drawerWidth = 240;

const StyledMainContent = styled("main", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{
  isOpen?: boolean;
}>(({ theme, isOpen }) => ({
  flexGrow: 1,
  marginTop: 60,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(isOpen && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

type MainContentProps = PropsWithChildren & {
  isOpen: boolean;
};

const MainContent = ({ children, isOpen }: MainContentProps): JSX.Element => {
  return <StyledMainContent isOpen={isOpen}>{children}</StyledMainContent>;
};

export default MainContent;
