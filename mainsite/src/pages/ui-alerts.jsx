import React from "react";
import { Link } from "react-router-dom";

function UiAlerts() {
  return (
    <div>
      {/* <!--  Body Wrapper --> */}
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        {/* <!-- Sidebar Start --> */}
        <aside className="left-sidebar">
          {/* <!-- Sidebar scroll--> */}
          <div>
            <div className="brand-logo d-flex align-items-center justify-content-between">
              <Link to="./index" className="text-nowrap logo-img">
                <img
                  src="../../public/images/logos/dark-logo.svg"
                  width="180"
                  alt=""
                />
              </Link>
              <div
                className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
                id="sidebarCollapse"
              >
                <i className="ti ti-x fs-8"></i>
              </div>
            </div>
            {/* <!-- Sidebar navigation--> */}
            <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
              <ul id="sidebarnav">
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                  <span className="hide-menu">Home</span>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./index"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-layout-dashboard"></i>
                    </span>
                    <span className="hide-menu">Dashboard</span>
                  </Link>
                </li>
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                  <span className="hide-menu">UI COMPONENTS</span>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./ui-buttons"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-article"></i>
                    </span>
                    <span className="hide-menu">Buttons</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./ui-alerts"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-alert-circle"></i>
                    </span>
                    <span className="hide-menu">Alerts</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./ui-card"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-cards"></i>
                    </span>
                    <span className="hide-menu">Card</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./ui-forms"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-file-description"></i>
                    </span>
                    <span className="hide-menu">Forms</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./ui-typography"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-typography"></i>
                    </span>
                    <span className="hide-menu">Typography</span>
                  </Link>
                </li>
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                  <span className="hide-menu">AUTH</span>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./authentication-login"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-login"></i>
                    </span>
                    <span className="hide-menu">Login</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./authentication-register"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-user-plus"></i>
                    </span>
                    <span className="hide-menu">Register</span>
                  </Link>
                </li>
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                  <span className="hide-menu">EXTRA</span>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./icon-tabler"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-mood-happy"></i>
                    </span>
                    <span className="hide-menu">Icons</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./sample-page"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-aperture"></i>
                    </span>
                    <span className="hide-menu">Sample Page</span>
                  </Link>
                </li>
              </ul>
              <div className="unlimited-access hide-menu bg-light-primary position-relative mb-7 mt-5 rounded">
                <div className="d-flex">
                  <div className="unlimited-access-title me-3">
                    <h6 className="fw-semibold fs-4 mb-6 text-dark w-85">
                      Upgrade to pro
                    </h6>
                    <Link
                      to="https://adminmart.com/product/modernize-bootstrap-5-admin-template/"
                      target="_blank"
                      className="btn btn-primary fs-2 fw-semibold lh-sm"
                    >
                      Buy Pro
                    </Link>
                  </div>
                  <div className="unlimited-access-img">
                    <img
                      src="../../public/images/backgrounds/rocket.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </nav>
            {/* <!-- End Sidebar navigation --> */}
          </div>
          {/* <!-- End Sidebar scroll--> */}
        </aside>
        {/* <!--  Sidebar End -->
    <!--  Main wrapper --> */}
        <div className="body-wrapper">
          {/* <!--  Header Start --> */}
          <header className="app-header">
            <nav className="navbar navbar-expand-lg navbar-light">
              <ul className="navbar-nav">
                <li className="nav-item d-block d-xl-none">
                  <Link
                    className="nav-link sidebartoggler nav-icon-hover"
                    id="headerCollapse"
                    to="javascript:void(0)"
                  >
                    <i className="ti ti-menu-2"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link nav-icon-hover"
                    to="javascript:void(0)"
                  >
                    <i className="ti ti-bell-ringing"></i>
                    <div className="notification bg-primary rounded-circle"></div>
                  </Link>
                </li>
              </ul>
              <div
                className="navbar-collapse justify-content-end px-0"
                id="navbarNav"
              >
                <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                  <Link
                    to="https://adminmart.com/product/modernize-free-bootstrap-admin-dashboard/"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Download Free
                  </Link>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link nav-icon-hover"
                      to="javascript:void(0)"
                      id="drop2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="../../public/images/profile/user-1.jpg"
                        alt=""
                        width="35"
                        height="35"
                        className="rounded-circle"
                      />
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="message-body">
                        <Link
                          to="javascript:void(0)"
                          className="d-flex align-items-center gap-2 dropdown-item"
                        >
                          <i className="ti ti-user fs-6"></i>
                          <p className="mb-0 fs-3">My Profile</p>
                        </Link>
                        <Link
                          to="javascript:void(0)"
                          className="d-flex align-items-center gap-2 dropdown-item"
                        >
                          <i className="ti ti-mail fs-6"></i>
                          <p className="mb-0 fs-3">My Account</p>
                        </Link>
                        <Link
                          to="javascript:void(0)"
                          className="d-flex align-items-center gap-2 dropdown-item"
                        >
                          <i className="ti ti-list-check fs-6"></i>
                          <p className="mb-0 fs-3">My Task</p>
                        </Link>
                        <Link
                          to="./authentication-login"
                          className="btn btn-outline-primary mx-3 mt-2 d-block"
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          {/* <!--  Header End --> */}
          <div className="container-fluid">
            <div className="container-fluid">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title fw-semibold mb-4">Alerts</h5>
                  <div className="card mb-0">
                    <div className="card-body p-4">
                      <div className="alert alert-primary" role="alert">
                        A simple primary alert—check it out!
                      </div>
                      <div className="alert alert-secondary" role="alert">
                        A simple secondary alert—check it out!
                      </div>
                      <div className="alert alert-success" role="alert">
                        A simple success alert—check it out!
                      </div>
                      <div className="alert alert-danger" role="alert">
                        A simple danger alert—check it out!
                      </div>
                      <div className="alert alert-warning" role="alert">
                        A simple warning alert—check it out!
                      </div>
                      <div className="alert alert-info" role="alert">
                        A simple info alert—check it out!
                      </div>
                      <div className="alert alert-light" role="alert">
                        A simple light alert—check it out!
                      </div>
                      <div className="alert alert-dark" role="alert">
                        A simple dark alert—check it out!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="../../public/libs/jquery/dist/jquery.min"></script>
      <script src="../../public/libs/bootstrap/dist/js/bootstrap.bundle.min"></script>
      <script src="../../public/js/sidebarmenu"></script>
      <script src="../../public/js/app.min"></script>
      <script src="../../public/libs/simplebar/dist/simplebar"></script>
    </div>
  );
}

export default UiAlerts;
// Compare this snippet from src/components/authentication-register: