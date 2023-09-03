import { Drawer, Flex } from "antd";
import { PropsWithChildren } from "react";
import NotificationCard from "./NotificationCard";

type NotificationsDrawerProps = PropsWithChildren & {
  onClose: () => void;
  open: boolean;
};

const NotificationsDrawer = ({ onClose, open }: NotificationsDrawerProps) => {
  return (
    <Drawer title="Notifications" onClose={onClose} open={open}>
      <Flex vertical gap="middle">
        <NotificationCard
          type="critical"
          heading="Critial Notification"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <NotificationCard
          type="warning"
          heading="Warning Notification"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <NotificationCard
          type="info"
          heading="Info Notification"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </Flex>
    </Drawer>
  );
};

export default NotificationsDrawer;
