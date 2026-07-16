import { useState } from "react";
import { toast } from "react-toastify";
import { BsEmojiSmile } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import EmojiPicker from "./EmojiPicker";

function ChatInput({ onSend }) {
  const [text, setText] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);

  const sendMessage = () => {
    if (!text.trim()) {
      toast.error("Message cannot be empty");
      return;
    }

    const newMessage = {
      id: Date.now(),
      sender: "me",
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    onSend(newMessage);

    toast.success("Message Sent");

    setText("");
    setShowEmoji(false);
  };

  return (
    <div className="chat-input">

      <button
        type="button"
        onClick={() => setShowEmoji(!showEmoji)}
      >
        <BsEmojiSmile />
      </button>

      <button
        type="button"
        onClick={() => toast.info("Attachment feature coming soon")}
      >
        <MdAttachFile />
      </button>

      {showEmoji && (
        <EmojiPicker
          onSelect={(emoji) =>
            setText((prev) => prev + emoji)
          }
        />
      )}

      <input
        type="text"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
      />

      <button
        type="button"
        onClick={() => toast.info("Voice message feature coming soon")}
      >
        <FaMicrophone />
      </button>

      <button
        type="button"
        onClick={sendMessage}
      >
        <IoSend />
      </button>

    </div>
  );
}

export default ChatInput;