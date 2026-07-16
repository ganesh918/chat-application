import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";

function AppRoutes({ theme, setTheme }) {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route
        path="/login"
        element={
          <Login
            theme={theme}
            setTheme={setTheme}
          />
        }
      />

      <Route
        path="/signup"
        element={
          <Signup
            theme={theme}
            setTheme={setTheme}
          />
        }
      />

      <Route
        path="/forgot-password"
        element={
          <ForgotPassword
            theme={theme}
            setTheme={setTheme}
          />
        }
      />

      <Route
        path="/dashboard"
        element={
          <Dashboard
            theme={theme}
            setTheme={setTheme}
          />
        }
      />

      <Route
        path="/profile"
        element={
          <Profile
            theme={theme}
            setTheme={setTheme}
          />
        }
      />

      <Route
        path="/settings"
        element={
          <Settings
            theme={theme}
            setTheme={setTheme}
          />
        }
      />
    </Routes>
  );
}

export default AppRoutes;