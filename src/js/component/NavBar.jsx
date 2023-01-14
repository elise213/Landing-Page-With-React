import React from "react";

const NavBar = () => {
  return (
    <div className="bg-dark ps-3 d-flex justify-content-end">
      <nav className="navbar navbar-expand-lg ">
        <div className="d-flex">
         <div className="">
            <a className="navbar text-white text-decoration-none" href="#">
              Start Bootstrap
            </a>
            </div>

          <div className="d-flex">
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
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active text-secondary"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-secondary" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-secondary" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-secondary">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
