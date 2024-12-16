import { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
const Sidebar = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-header">
          <IoSchool color="#34495e" size={30} />
          <a href="/">School Management</a>
        </div>
        <nav className="nav flex-column">
          <div
            className="nav-link"
            onClick={toggleSubmenu}
            style={{ cursor: "pointer" }}
          >
            <MdDashboard /> Dashboard
          </div>
          <div className={`submenu-container ${showSubmenu ? "show" : ""}`}>
            <Link className="nav-link" to="/admin">
              <i className="bi bi-person-badge"></i> Admin
            </Link>
            <Link className="nav-link" to="/student">
              <i className="bi bi-people"></i> Students
            </Link>
            <Link className="nav-link" to="/teacher">
              <i className="bi bi-person"></i> Teachers
            </Link>
            <Link className="nav-link" to="/parent">
              <i className="bi bi-people"></i> Parents
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
