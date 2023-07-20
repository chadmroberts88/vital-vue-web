import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import HeaderBar from "./components/HeaderBar";
import NavigationDrawer from "./navigation/NavigationDrawer";
import MainContent from "./components/MainContent";
import PatientListPage from "./components/PatientListPage";

const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
  },
});

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleToggleDrawer = (): void => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <NavigationDrawer isOpen={isDrawerOpen} toggleDrawer={handleToggleDrawer}>
        <MainContent isOpen={isDrawerOpen}>
          <HeaderBar isOpen={isDrawerOpen} toggleDrawer={handleToggleDrawer} />
          <PatientListPage />
        </MainContent>
      </NavigationDrawer>
    </ThemeProvider>
  );
}

export default App;
