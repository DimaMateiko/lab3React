import React from "react";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
        <div className="container text-light">
          <div className="w-100 d-flex justify-content-between">
            <div>
              <i className="fa fa-envelope mx-2"></i>

              <a className="navbar-sm-brand text-light text-decoration-none">info@zayshop.com</a>

              <i className="fa fa-phone mx-2"></i>
              <a className="navbar-sm-brand text-light text-decoration-none">010-020-0340</a>
            </div>
            <div>
              <a className="text-light" href="https://fb.com/templatemo" target="_blank" rel="sponsored">
                <i className="fab fa-facebook-f fa-sm fa-fw me-2"></i>
              </a>
              <a className="text-light" href="https://www.instagram.com/" target="_blank">
                <i className="fab fa-instagram fa-sm fa-fw me-2"></i>
              </a>
              <a className="text-light" href="https://twitter.com/" target="_blank">
                <i className="fab fa-twitter fa-sm fa-fw me-2"></i>
              </a>
              <a className="text-light" href="https://www.linkedin.com/" target="_blank">
                <i className="fab fa-linkedin fa-sm fa-fw"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="navbar-brand text-success logo h1 align-self-center">
            {" "}
            Zay{" "}
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#templatemo_main_nav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
            <div className="flex-fill">
              <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
