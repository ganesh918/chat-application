import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SettingsPanel from "../components/settings/SettingsPanel";

function Settings({ theme, setTheme }) {
  const navigate = useNavigate();

  return (
    <div>

      <button
        className="back-btn"
        onClick={() => navigate("/dashboard")}
      >
        <FaArrowLeft />
        Back
      </button>

      <SettingsPanel
        theme={theme}
        setTheme={setTheme}
      />

    </div>
  );
}

export default Settings;