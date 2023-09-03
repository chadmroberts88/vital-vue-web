import { useState } from "react";
import { BellFilled } from "@ant-design/icons";
import PageLayout from "./components/PageLayout";
import DashboardPage from "./components/DashboardPage";
import NotificationDrawer from "./components/NotificationDrawer";
import { Button } from "antd";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <PageLayout>
      <Button
        type="primary"
        icon={<BellFilled style={{ fontSize: "20px" }} />}
        onClick={openDrawer}
        style={{
          position: "fixed",
          zIndex: 10,
          top: "10px",
          right: "10px",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <NotificationDrawer onClose={closeDrawer} open={drawerOpen} />
      <DashboardPage />
    </PageLayout>
  );
}

export default App;
