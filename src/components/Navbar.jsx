import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../context/myContext";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, loLogOut } = useContext(userContext);

  const handleLogout = async () => {
    const data = await loLogOut();
    if (data.success) {
      navigate("/login");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary header">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Techdome
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/upload">
                  Upload Image
                </Link>
              </li> */}
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <span className="nav-link "> {user?.name}</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link " onClick={handleLogout}>
                    Logout
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
