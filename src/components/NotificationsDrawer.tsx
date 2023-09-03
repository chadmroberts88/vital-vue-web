import { Drawer } from "antd";
import { PropsWithChildren } from "react";

type NotificationsDrawerProps = PropsWithChildren & {
  onClose: () => void;
  open: boolean;
};

const NotificationsDrawer = ({ onClose, open }: NotificationsDrawerProps) => {
  return (
    <Drawer title="Basic Drawer" onClose={onClose} open={open}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default NotificationsDrawer;
