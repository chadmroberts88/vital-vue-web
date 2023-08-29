import { Col, Row, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import PatientsTable from "./PatientsTable";

const DashboardPage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
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
  );
};

export default DashboardPage;
