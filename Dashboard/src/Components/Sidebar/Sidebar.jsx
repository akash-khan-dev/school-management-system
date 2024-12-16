import "./Sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-header">School Management</div>
        <nav className="nav flex-column">
          <Link className="nav-link" to="/">
            <i className="bi bi-speedometer2"></i> Dashboard
          </Link>
          <Link className="nav-link" to="/student">
            <i className="bi bi-people"></i> Students
          </Link>
          <Link className="nav-link" to="/teacher">
            <i className="bi bi-person"></i> Teachers
          </Link>
          <Link className="nav-link" to="/parent">
            <i className="bi bi-person"></i> Parents
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
