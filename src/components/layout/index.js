import React from "react";
import { Link } from "react-router-dom";

const LayoutContainer = ({ children }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <Link className="navbar-brand" to="/">
          RTK QUERY
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="navbar-brand" to="/posts">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/create">
                Create Post
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default LayoutContainer;
