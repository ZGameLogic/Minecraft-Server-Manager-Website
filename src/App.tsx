import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router";
import AppHeader from "./header/AppHeader.tsx";
import Dashboard from "./dashboard/Dashboard.tsx";
import Servers from "./servers/Servers.tsx";
import {AuthDataProvider} from "./global/auth/AuthDataProvider.tsx";
import LoginPage from "./login/LoginPage.tsx";
import {ServerDataProvider} from "./global/server/ServerDataProvider.tsx";

function App() {
  const theme = createTheme({
    colorSchemes: {
      dark: true,
    },
  });

  return <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AuthDataProvider>
        <ServerDataProvider>
          <CssBaseline />
          <AppHeader />
          <Routes>
            <Route path={'/'} element={<Dashboard />} />
            <Route path={'/servers'} element={<Servers />} />
            <Route path={'/login'} element={<LoginPage />} />
          </Routes>
        </ServerDataProvider>
      </AuthDataProvider>
    </BrowserRouter>
  </ThemeProvider>;
}

export default App;
