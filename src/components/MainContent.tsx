import { PropsWithChildren } from "react";
import { styled } from "@mui/material/styles";

const StyledMainContent = styled("main", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{
  isOpen?: boolean;
}>(({ theme, isOpen }) => ({
  flex: 1,
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  height: "100%",
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
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
