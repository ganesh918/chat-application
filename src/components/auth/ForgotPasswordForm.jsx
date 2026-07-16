import { Link } from "react-router-dom";
import "./Auth.css";

function ForgotPasswordForm() {
  return (
    <div className="auth-container">

      <form className="auth-card">

        <h2>Forgot Password</h2>

        <div className="input-group">

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter Email"
          />

        </div>

        <button className="auth-btn">
          Send Reset Link
        </button>

        <div className="auth-links">
          <Link to="/login">
            Back to Login
          </Link>
        </div>

      </form>

    </div>
  );
}

export default ForgotPasswordForm;