import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import PageLayout from "./components/PageLayout";

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
      <PageLayout></PageLayout>
    </ThemeProvider>
  );
}

export default App;
