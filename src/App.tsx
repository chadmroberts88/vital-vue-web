import { useState } from "react";
import PageLayout from "./components/PageLayout";
import DashboardPage from "./components/DashboardPage";
import NotificationsDrawer from "./components/NotificationsDrawer";
import NotificationsButton from "./components/NotificationsButton";

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
      <NotificationsButton
        onClick={openDrawer}
        notificationCount={6}
        hasCritical={false}
      />
      <NotificationsDrawer onClose={closeDrawer} open={drawerOpen} />
      <DashboardPage />
    </PageLayout>
  );
}

export default App;
