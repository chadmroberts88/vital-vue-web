import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import HeaderBar from "./components/HeaderBar";
import NavigationDrawer from "./navigation/NavigationDrawer";
import MainContent from "./components/MainContent";
import PatientsTable from "./components/PatientsTable";
import { Box, Grid } from "@mui/material";
import PatientsTableNew from "./components/PatientsTableNew";

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
          <Box display="flex">
            <Box bgcolor="orange" flex={1} flexShrink={1}>
              <div
                style={{
                  height: "500px",
                  backgroundColor: "red",
                  margin: "20px",
                  display: "flex",
                  minWidth: "200px",
                }}
              ></div>
            </Box>
            <Box bgcolor="yellow" flex={2}>
              <div
                style={{
                  height: "500px",
                  backgroundColor: "blue",
                  margin: "20px",
                  display: "flex",
                }}
              ></div>
            </Box>
          </Box>
          <Box display="flex">
            <PatientsTableNew />
          </Box>
        </MainContent>
      </NavigationDrawer>
    </ThemeProvider>
  );
}

export default App;
