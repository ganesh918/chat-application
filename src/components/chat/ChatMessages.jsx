import { useEffect, useRef } from "react";

function ChatMessages({ messages, isTyping }) {
  const bottomRef = useRef(null);

  // Auto-scroll when new message or typing indicator appears
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  return (
    <div className="chat-messages">

      {messages.length === 0 ? (
        <div className="no-messages">
          <h3>No Messages Yet</h3>
          <p>Start the conversation 👋</p>
        </div>
      ) : (
        <>
          {messages.map((message) => (
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
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="typing-container">
              <div className="typing-bubble">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="typing-text">
                Typing...
              </div>
            </div>
          )}
        </>
      )}

      <div ref={bottomRef}></div>

    </div>
  );
}

export default ChatMessages;