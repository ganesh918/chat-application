import {
  FaArrowLeft,
  FaPhoneAlt,
  FaVideo,
  FaEllipsisV,
} from "react-icons/fa";

function ChatHeader({
  user,
  openProfile,
  goBack,
}) {
  return (
    <div className="chat-header">
      <div className="chat-user">
        <FaArrowLeft
          className="mobile-back"
          onClick={goBack}
        />

        <div
          className="chat-user-info"
          onClick={openProfile}
        >
          <img
            src={user.avatar}
            alt={user.name}
            className="chat-avatar"
          />

          <div>
            <h3>{user.name}</h3>

            {user.name === "Karthik Kumar" ? (
              <small className="typing-status">
                Typing
                <span className="typing-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </small>
            ) : (
              <small>
                {user.online ? "Online" : "Offline"}
              </small>
            )}
          </div>
        </div>
      </div>

      <div className="chat-actions">
        <button>
          <FaPhoneAlt />
        </button>

        <button>
          <FaVideo />
        </button>

        <button>
          <FaEllipsisV />
        </button>
      </div>
    </div>
  );
}

export default ChatHeader;