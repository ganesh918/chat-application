import { Link } from "react-router-dom";
import {
  FaComments,
  FaUser,
  FaCog,
} from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";

import "./Dashboard.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="app-logo">
        <IoChatbubbleEllipses />
        <span>Chat App</span>
      </h2>

      <ul>

        <li>
          <Link
            to="/dashboard"
            className="sidebar-link"
          >
            <FaComments />
            <span>Chats</span>
          </Link>
        </li>

        <li>
          <Link
            to="/profile"
            className="sidebar-link"
          >
            <FaUser />
            <span>Profile</span>
          </Link>
        </li>

        <li>
          <Link
            to="/settings"
            className="sidebar-link"
          >
            <FaCog />
            <span>Settings</span>
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;