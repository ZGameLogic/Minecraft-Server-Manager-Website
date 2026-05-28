import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router";
import AppHeader from "./header/AppHeader.tsx";
import Dashboard from "./dashboard/Dashboard.tsx";
import Servers from "./servers/Servers.tsx";
import {AuthDataProvider} from "./global/auth/AuthDataProvider.tsx";

function App() {
  const theme = createTheme({
    colorSchemes: {
      dark: true,
    },
  });

  return <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AuthDataProvider>
        <CssBaseline />
        <AppHeader />
        <Routes>
          <Route path={'/'} element={<Dashboard />} />
          <Route path={'/servers'} element={<Servers />} />
        </Routes>
      </AuthDataProvider>
    </BrowserRouter>
  </ThemeProvider>;
}

export default App;
