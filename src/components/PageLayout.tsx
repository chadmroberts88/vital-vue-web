import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Row, Col, theme } from "antd";
import PatientsTable from "./PatientsTable";

const { Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 80,
              height: 64,
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
      <Layout>
        <Content style={{ margin: "16px" }}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <div
                style={{
                  padding: "16px",
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                  height: "400px",
                }}
              >
                Bill is a cat.
              </div>
            </Col>
            <Col span={12}>
              <div
                style={{
                  padding: "16px",
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                  height: "400px",
                }}
              >
                Bill is a cat.
              </div>
            </Col>
            <Col span={24}>
              <PatientsTable />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
