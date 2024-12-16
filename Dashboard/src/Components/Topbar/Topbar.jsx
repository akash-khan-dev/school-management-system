import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Topbar.css";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";

const Topbar = () => {
  const [showMenu, setShowMenu] = useState(false);
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
            <span onClick={() => setShowMenu(!showMenu)} className="username">
              John Doe
            </span>
          </div>
          {showMenu && (
            <div className="dropdown-menu-container">
              <ul className="dropdown-menu-custom">
                <li>
                  <a className="dropdown-item" href="/myprofile">
                    <CgProfile /> My Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/messages">
                    <LuMessageCircleMore /> Messages
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/messages">
                    <IoNotificationsOutline /> Notification
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/messages">
                    <IoSettingsOutline /> Setting
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/logout">
                    <CiLogin /> Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
