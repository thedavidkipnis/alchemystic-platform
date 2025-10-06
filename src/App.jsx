import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import SplashPage from "./pages/SplashPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardClient from "./pages/DashboardClient";
import DashboardPractitioner from "./pages/DashboardPractitioner";
import DashboardProvider from "./pages/DashboardProvider";
import ForClientsSplash from "./pages/ForClientsSplash";
import PUC from "./pages/PAGEUNDERCONSTRUCTION";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router basename="/alchemystic-platform/">
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/app/login" element={<Login />} />
          <Route path="/app/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard-client" element={<DashboardClient />} />
          <Route path="/dashboard-practitioner" element={<DashboardPractitioner />} />
          <Route path="/dashboard-provider" element={<DashboardProvider />} />
          <Route path="/clients-splash-page" element={<ForClientsSplash />} />
          <Route path="/tbd" element={<PUC />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;