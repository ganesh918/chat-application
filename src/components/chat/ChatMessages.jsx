import { useEffect, useRef } from "react";

function ChatMessages({ messages }) {
  const bottomRef = useRef(null);

  // Auto scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="chat-messages">

      {messages.length === 0 ? (
        <div className="no-messages">
          <h3>No Messages Yet</h3>
          <p>Start the conversation 👋</p>
        </div>
      ) : (
        messages.map((message) => (
          <div
            key={message.id}
            className={`message ${
              message.sender === "me"
                ? "sent"
                : "received"
            }`}
          >
            <div className="message-text">
              {message.text}
            </div>

            <div className="message-time">
              {message.time}
            </div>
          </div>
        ))
      )}

      <div ref={bottomRef}></div>

    </div>
  );
}

export default ChatMessages;