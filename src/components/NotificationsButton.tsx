import { Badge, Button } from "antd";
import { BellFilled } from "@ant-design/icons";
import { PropsWithChildren } from "react";

type NotificationsButtonProps = PropsWithChildren & {
  onClick: () => void;
  notificationCount?: number;
  hasCritical?: boolean;
};

const NotificationsButton = ({
  onClick,
  notificationCount,
  hasCritical,
}: NotificationsButtonProps) => {
  return (
    <div style={{ position: "fixed", zIndex: 10, top: "14px", right: "20px" }}>
      <Badge
        overflowCount={99}
        count={notificationCount}
        style={{ top: "4px", right: "4px" }}
      >
        <Button
          type="primary"
          className={hasCritical ? "pulsate" : undefined}
          icon={<BellFilled style={{ fontSize: "20px" }} />}
          onClick={onClick}
          style={{
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </Badge>
    </div>
  );
};

export default NotificationsButton;
