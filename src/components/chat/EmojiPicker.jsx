function EmojiPicker({ onSelect }) {

  const emojis = ["😀", "😂", "😍", "❤️", "👍", "🔥"];

  return (
    <div className="emoji-picker">

      {emojis.map((emoji) => (
        <span
          key={emoji}
          onClick={() => onSelect(emoji)}
        >
          {emoji}
        </span>
      ))}

    </div>
  );
}

export default EmojiPicker;