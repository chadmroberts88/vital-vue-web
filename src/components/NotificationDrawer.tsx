import { Drawer } from "antd";
import { PropsWithChildren } from "react";

type NotificationDrawerProps = PropsWithChildren & {
  onClose: () => void;
  open: boolean;
};

const NotificationDrawer = ({ onClose, open }: NotificationDrawerProps) => {
  return (
    <Drawer title="Basic Drawer" onClose={onClose} open={open}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default NotificationDrawer;
