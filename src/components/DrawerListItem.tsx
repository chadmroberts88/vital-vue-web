import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface DrawerListItemProps {
  text?: string;
  link?: string;
  icon?: JSX.Element;
}

const DrawerListItem = ({
  text,
  link,
  icon,
}: DrawerListItemProps): JSX.Element => {
  return (
    <ListItem disablePadding onClick={() => console.log(text)} sx={{ mb: 2 }}>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default DrawerListItem;
