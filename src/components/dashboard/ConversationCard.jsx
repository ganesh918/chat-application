function ConversationCard({
  user,
  selectedUser,
  setSelectedUser,
}) {
  return (
    <div
      className={`conversation-card ${
        selectedUser?.id === user.id ? "active-chat" : ""
      }`}
      onClick={() => setSelectedUser(user)}
    >
      <img
        src={user.avatar}
        alt={user.name}
      />

      <div className="conversation-info">
        <h4>{user.name}</h4>

        {user.name === "Karthik Kumar" ? (
         <p className="dashboard-typing">
  Typing
  <span className="dashboard-dots">
    <span></span>
    <span></span>
    <span></span>
  </span>
</p>
        ) : (
          <p>{user.lastMessage}</p>
        )}
      </div>

      <div className="conversation-right">
        <small>{user.time}</small>

        {user.unread > 0 && (
          <span className="badge">
            {user.unread}
          </span>
        )}

        <div>
          <span
            className={
              user.online
                ? "online"
                : "offline"
            }
          ></span>
        </div>
      </div>
    </div>
  );
}

export default ConversationCard;