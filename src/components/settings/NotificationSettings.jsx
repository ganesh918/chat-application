import { useState } from "react";

function NotificationSettings() {
  const [messageNotification, setMessageNotification] = useState(true);
  const [desktopNotification, setDesktopNotification] = useState(true);
  const [soundNotification, setSoundNotification] = useState(true);

  return (
    <div className="settings-section">

      <h3>🔔 Notification Settings</h3>

      <div className="setting-item">
        <span>Message Notifications</span>

        <label className="switch">
          <input
            type="checkbox"
            checked={messageNotification}
            onChange={() =>
              setMessageNotification(!messageNotification)
            }
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="setting-item">
        <span>Desktop Notifications</span>

        <label className="switch">
          <input
            type="checkbox"
            checked={desktopNotification}
            onChange={() =>
              setDesktopNotification(!desktopNotification)
            }
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="setting-item">
        <span>Sound Notifications</span>

        <label className="switch">
          <input
            type="checkbox"
            checked={soundNotification}
            onChange={() =>
              setSoundNotification(!soundNotification)
            }
          />
          <span className="slider"></span>
        </label>
      </div>

    </div>
  );
}

export default NotificationSettings;