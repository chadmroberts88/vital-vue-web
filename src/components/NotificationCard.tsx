import {
  AlertOutlined,
  CloseOutlined,
  InfoCircleOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { PropsWithChildren } from "react";
import { NotificationType } from "../types";
import Colors from "../colors";
import { Button } from "antd";

type NotificationCardProps = PropsWithChildren & {
  heading: string;
  content: string;
  type?: NotificationType;
};

const NotificationCard = ({
  type,
  heading,
  content,
}: NotificationCardProps) => {
  const borderColor = type ? Colors[type].border : "#f0f0f0";
  const bgColor = type ? Colors[type].background : "#ffffff";
  const iconStyle = { fontSize: "16px" };

  return (
    <div
      style={{
        border: `1px solid ${borderColor}`,
        backgroundColor: bgColor,
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          borderBottom: `1px solid ${borderColor}`,
          backgroundColor: borderColor,
          padding: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {type === "critical" ? (
            <AlertOutlined style={iconStyle} />
          ) : type === "warning" ? (
            <WarningOutlined style={iconStyle} />
          ) : (
            <InfoCircleOutlined style={iconStyle} />
          )}
          <div style={{ fontWeight: "bold", fontSize: "14px" }}>{heading}</div>
        </div>
        <Button
          type="text"
          icon={<CloseOutlined style={{ fontSize: "14px" }} />}
          onClick={() => console.log("Dismiss notification.")}
          style={{
            borderRadius: "50%",
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </div>
      <div style={{ fontSize: "12px", padding: "8px" }}>{content}</div>
    </div>
  );
};

export default NotificationCard;
