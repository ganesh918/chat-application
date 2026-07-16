import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import "./Auth.css";

function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password.trim()) {
      toast.error("Please fill all fields");
      return;
    }

    toast.success("Login Successful");

    setTimeout(() => {
      navigate("/dashboard");
    }, 1200);
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>

        <h2>Login</h2>

        <div className="input-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Enter Email"
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Password</label>

          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              placeholder="Enter Password"
              onChange={handleChange}
            />

            <span
              onClick={() =>
                setShowPassword(!showPassword)
              }
              style={{ cursor: "pointer" }}
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </span>

          </div>
        </div>

        <button
          type="submit"
          className="auth-btn"
        >
          Login
        </button>

        <div className="auth-links">

          <Link to="/forgot-password">
            Forgot Password?
          </Link>

          <br />
          <br />

          <Link to="/signup">
            Create Account
          </Link>

        </div>

      </form>
    </div>
  );
}

export default LoginForm;