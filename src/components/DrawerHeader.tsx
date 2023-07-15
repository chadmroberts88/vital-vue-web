import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const StyledDrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const DrawerHeader = (): JSX.Element => {
  return (
    <StyledDrawerHeader>
      <Typography variant="h5">VitalVue</Typography>
    </StyledDrawerHeader>
  );
};

export default DrawerHeader;
