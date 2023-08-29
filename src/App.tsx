import { ThemeProvider, createTheme } from "@mui/material/styles";

import PageLayout from "./components/PageLayout";
import DashboardPage from "./components/DashboardPage";

const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <PageLayout>
        <DashboardPage />
      </PageLayout>
    </ThemeProvider>
  );
}

export default App;
