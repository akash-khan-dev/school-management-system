import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Topbar.css";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
const Topbar = () => {
  return (
    <div className="topbar d-flex justify-content-between align-items-center px-3 py-2">
      <div className="topbar-search">
        <input type="text" className="form-control" placeholder="Search..." />
      </div>

      <div className="topbar-right d-flex align-items-center">
        <div className="icon mx-2">
          <LuMessageSquareMore />
        </div>

        <div className="icon mx-2">
          <i className="bi bi-bell-fill">
            <IoMdNotificationsOutline />
          </i>
        </div>
        <div className="dropdown">
          <div
            className="d-flex align-items-center dropdown-toggle"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ cursor: "pointer" }}
          >
            <img
              src="https://via.placeholder.com/40"
              alt="profile"
              className="rounded-circle me-2"
              width="40"
              height="40"
            />
            <span className="username">John Doe</span>
          </div>
          <div className="dropdown-menu-container">
            <ul className="dropdown-menu-custom">
              <li>
                <a className="dropdown-item" href="/myprofile">
                  <i className="bi bi-person-circle me-2"></i> My Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/messages">
                  <i className="bi bi-chat-dots me-2"></i> Messages
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/logout">
                  <i className="bi bi-box-arrow-right me-2"></i> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
