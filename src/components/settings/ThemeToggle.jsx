function ThemeToggle({ theme, setTheme }) {
  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="setting-item">

      <div>
        <h4>Theme</h4>
        <p>Switch between Light and Dark mode</p>
      </div>

      <label className="switch">

        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={handleToggle}
        />

        <span className="slider"></span>

      </label>

    </div>
  );
}

export default ThemeToggle;