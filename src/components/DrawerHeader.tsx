import React, { PropsWithChildren } from "react";
import { styled } from "@mui/material/styles";

const StyledDrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const DrawerHeader = ({ children }: PropsWithChildren): JSX.Element => {
  return <StyledDrawerHeader>{children}</StyledDrawerHeader>;
};

export default DrawerHeader;
