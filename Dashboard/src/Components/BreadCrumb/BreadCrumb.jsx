/* eslint-disable react/prop-types */

import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = ({ title }) => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter((path) => path !== "");

  const generateBreadcrumb = () => {
    return pathParts.map((path, index) => {
      const to = "/" + pathParts.slice(0, index + 1).join("/");

      return (
        <li
          key={index}
          className={`breadcrumb-item ${
            index === pathParts.length - 1 ? "active" : ""
          }`}
        >
          {index === pathParts.length - 1 ? (
            path.charAt(0).toUpperCase() + path.slice(1)
          ) : (
            <Link to={to}>{path.charAt(0).toUpperCase() + path.slice(1)}</Link>
          )}
        </li>
      );
    });
  };

  return (
    <nav aria-label="breadcrumb" className="bread-crumb">
      <h3>{title}</h3>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {generateBreadcrumb()}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
