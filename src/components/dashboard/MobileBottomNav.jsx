import { NavLink } from "react-router-dom";
import { FaComments, FaUser, FaCog } from "react-icons/fa";
import "./MobileBottomNav.css";

function MobileBottomNav() {
  return (
    <nav className="mobile-nav">

      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? "mobile-link active" : "mobile-link"
        }
      >
        <FaComments />
        <span>Chats</span>
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive ? "mobile-link active" : "mobile-link"
        }
      >
        <FaUser />
        <span>Profile</span>
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) =>
          isActive ? "mobile-link active" : "mobile-link"
        }
      >
        <FaCog />
        <span>Settings</span>
      </NavLink>

    </nav>
  );
}

export default MobileBottomNav;