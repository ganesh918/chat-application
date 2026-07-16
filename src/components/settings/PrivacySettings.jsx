import { useState } from "react";

function PrivacySettings() {
  const [onlineStatus, setOnlineStatus] = useState(true);
  const [readReceipts, setReadReceipts] = useState(true);
  const [lastSeen, setLastSeen] = useState(true);
  const [profilePhoto, setProfilePhoto] = useState(true);

  return (
    <div className="settings-section">

      <h3>🔒 Privacy Settings</h3>

      <div className="setting-item">
        <span>Show Online Status</span>

        <label className="switch">
          <input
            type="checkbox"
            checked={onlineStatus}
            onChange={() => setOnlineStatus(!onlineStatus)}
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="setting-item">
        <span>Read Receipts</span>

        <label className="switch">
          <input
            type="checkbox"
            checked={readReceipts}
            onChange={() => setReadReceipts(!readReceipts)}
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="setting-item">
        <span>Show Last Seen</span>

        <label className="switch">
          <input
            type="checkbox"
            checked={lastSeen}
            onChange={() => setLastSeen(!lastSeen)}
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="setting-item">
        <span>Show Profile Photo</span>

        <label className="switch">
          <input
            type="checkbox"
            checked={profilePhoto}
            onChange={() => setProfilePhoto(!profilePhoto)}
          />
          <span className="slider"></span>
        </label>
      </div>

    </div>
  );
}

export default PrivacySettings;