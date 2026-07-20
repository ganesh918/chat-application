import { NavLink } from "react-router-dom";
import {
  FaComments,
  FaUser,
  FaCog,
} from "react-icons/fa";


import "./Dashboard.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="app-logo">
  
        <span>NexChat ✨💬</span>
      </h2>

      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <FaComments />
            <span>Chats</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <FaUser />
            <span>Profile</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <FaCog />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;