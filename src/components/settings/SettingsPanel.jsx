import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import ThemeToggle from "./ThemeToggle";
import NotificationSettings from "./NotificationSettings";
import PrivacySettings from "./PrivacySettings";

import {
  FaSignOutAlt,
  FaInfoCircle,
  FaLanguage,
} from "react-icons/fa";

import "./Settings.css";

function SettingsPanel({ theme, setTheme }) {
  const navigate = useNavigate();

  const [language, setLanguage] = useState("English");

  const [showLogout, setShowLogout] = useState(false);

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
    toast.success("Language Updated");
  };

  const logout = () => {
    toast.success("Logged Out Successfully");

    setTimeout(() => {
      navigate("/login");
    }, 1200);
  };

  return (
    <div className="settings-container">

      <h2>⚙️ Settings</h2>

      {/* Theme */}

      <ThemeToggle
        theme={theme}
        setTheme={setTheme}
      />

      {/* Notifications */}

      <NotificationSettings />

      {/* Privacy */}

      <PrivacySettings />

      {/* Language */}

      <div className="settings-section">

        <h3>
          <FaLanguage /> Language
        </h3>

        <div className="setting-item">

          <span>Select Language</span>

          <select
            value={language}
            onChange={handleLanguage}
          >
            <option>English</option>
            <option>Telugu</option>
            <option>Hindi</option>
          </select>

        </div>

      </div>

      {/* About */}

      <div className="settings-section">

        <h3>
          <FaInfoCircle /> About
        </h3>

        <div className="setting-item">

          <span>Version</span>

          <strong>1.0.0</strong>

        </div>

        <div className="setting-item">

          <span>Developer</span>

          <strong>Ganesh Kumar Reddy</strong>

        </div>

      </div>

      {/* Logout */}

      <button
        className="logout-btn"
        onClick={() => setShowLogout(true)}
      >
        <FaSignOutAlt />
        Logout
      </button>

      {showLogout && (

        <div className="logout-modal">

          <div className="logout-box">

            <h3>Logout</h3>

            <p>
              Are you sure you want to logout?
            </p>

            <div className="logout-buttons">

              <button
                className="confirm-btn"
                onClick={logout}
              >
                Yes
              </button>

              <button
                className="cancel-btn"
                onClick={() =>
                  setShowLogout(false)
                }
              >
                No
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default SettingsPanel;