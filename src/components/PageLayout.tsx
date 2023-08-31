import { PropsWithChildren, useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  CaretLeftFilled,
  CaretRightFilled,
} from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import Sider from "antd/es/layout/Sider";

type PageLayoutProps = PropsWithChildren & {};

const PageLayout = ({ children }: PageLayoutProps) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout
      style={{
        minHeight: "100vh",
        position: "absolute",
        width: "100%",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            width: "100%",
            height: "80px",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "white",
              borderRadius: "50%",
              position: "absolute",
              margin: "20px",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              lineHeight: "24px",
              top: "50%",
              left: "80px",
              marginTop: "-12px",
              color: "white",
              fontSize: "24px",
              textWrap: "nowrap",
              display: collapsed ? "none" : "block",
            }}
          >
            Vital Vue
          </div>
          <Button
            type="text"
            icon={collapsed ? <CaretRightFilled /> : <CaretLeftFilled />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "18px",
              backgroundColor: "white",
              position: "absolute",
              width: "26px",
              height: "26px",
              top: "50%",
              right: "-13px",
              marginTop: "-13px",
              borderRadius: "50%",
              border: "2px solid #001529",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout style={{ overflow: "auto" }}>{children}</Layout>
    </Layout>
  );
};

export default PageLayout;
