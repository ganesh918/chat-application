function MessageBubble({ message }) {
  return (
    <div
      className={
        message.sender === "me"
          ? "message sent"
          : "message received"
      }
    >
      <p>{message.text}</p>
      <span>{message.time}</span>
    </div>
  );
}

export default MessageBubble;