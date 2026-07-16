import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import "./Auth.css";

function SignupForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      toast.error("Name is required");
      return;
    }

    if (form.name.length < 3) {
      toast.error("Name must contain at least 3 characters");
      return;
    }

    if (!form.email.trim()) {
      toast.error("Email is required");
      return;
    }

    if (!validateEmail(form.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!form.password.trim()) {
      toast.error("Password is required");
      return;
    }

    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (!form.confirmPassword.trim()) {
      toast.error("Confirm Password is required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    toast.success("Account Created Successfully 🎉");

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>

        <h2>Create Account</h2>

        <div className="input-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="Enter Full Name"
            onChange={handleChange}
          />
        </div>

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
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </span>
          </div>
        </div>

        <div className="input-group">
          <label>Confirm Password</label>

          <div className="password-box">
            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              name="confirmPassword"
              value={form.confirmPassword}
              placeholder="Confirm Password"
              onChange={handleChange}
            />

            <span
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
            >
              {showConfirmPassword ? (
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
          Signup
        </button>

        <div className="auth-links">
          <Link to="/login">
            Already have an account?
          </Link>
        </div>

      </form>
    </div>
  );
}

export default SignupForm;