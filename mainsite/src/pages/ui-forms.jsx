import React from "react";

function UiForms() {
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
              <a href="./index.js" className="text-nowrap logo-img">
                <img
                  src="../../public/images/logos/dark-logo.svg"
                  width="180"
                  alt=""
                />
              </a>
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
                  <a
                    className="sidebar-link"
                    href="./index.js"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-layout-dashboard"></i>
                    </span>
                    <span className="hide-menu">Dashboard</span>
                  </a>
                </li>
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                  <span className="hide-menu">UI COMPONENTS</span>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="./ui-buttons.js"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-article"></i>
                    </span>
                    <span className="hide-menu">Buttons</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="./ui-alerts.js"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-alert-circle"></i>
                    </span>
                    <span className="hide-menu">Alerts</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="./ui-card.js"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-cards"></i>
                    </span>
                    <span className="hide-menu">Card</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="./ui-forms.js"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-file-description"></i>
                    </span>
                    <span className="hide-menu">Forms</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="./ui-typography.js"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-typography"></i>
                    </span>
                    <span className="hide-menu">Typography</span>
                  </a>
                </li>
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                  <span className="hide-menu">AUTH</span>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="./authentication-login.js"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-login"></i>
                    </span>
                    <span className="hide-menu">Login</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="./authentication-register.js"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-user-plus"></i>
                    </span>
                    <span className="hide-menu">Register</span>
                  </a>
                </li>
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                  <span className="hide-menu">EXTRA</span>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="./icon-tabler.js"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-mood-happy"></i>
                    </span>
                    <span className="hide-menu">Icons</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="./sample-page.js"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-aperture"></i>
                    </span>
                    <span className="hide-menu">Sample Page</span>
                  </a>
                </li>
              </ul>
              <div className="unlimited-access hide-menu bg-light-primary position-relative mb-7 mt-5 rounded">
                <div className="d-flex">
                  <div className="unlimited-access-title me-3">
                    <h6 className="fw-semibold fs-4 mb-6 text-dark w-85">
                      Upgrade to pro
                    </h6>
                    <a
                      href="https://adminmart.com/product/modernize-bootstrap-5-admin-template/"
                      target="_blank"
                      className="btn btn-primary fs-2 fw-semibold lh-sm"
                    >
                      Buy Pro
                    </a>
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
        {/* <!--  Sidebar End --> */}
        {/* <!--  Main wrapper --> */}
        <div className="body-wrapper">
          {/* <!--  Header Start --> */}
          <header className="app-header">
            <nav className="navbar navbar-expand-lg navbar-light">
              <ul className="navbar-nav">
                <li className="nav-item d-block d-xl-none">
                  <a
                    className="nav-link sidebartoggler nav-icon-hover"
                    id="headerCollapse"
                    href="javascript:void(0)"
                  >
                    <i className="ti ti-menu-2"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link nav-icon-hover"
                    href="javascript:void(0)"
                  >
                    <i className="ti ti-bell-ringing"></i>
                    <div className="notification bg-primary rounded-circle"></div>
                  </a>
                </li>
              </ul>
              <div
                className="navbar-collapse justify-content-end px-0"
                id="navbarNav"
              >
                <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                  <a
                    href="https://adminmart.com/product/modernize-free-bootstrap-admin-dashboard/"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Download Free
                  </a>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link nav-icon-hover"
                      href="javascript:void(0)"
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
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="message-body">
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 dropdown-item"
                        >
                          <i className="ti ti-user fs-6"></i>
                          <p className="mb-0 fs-3">My Profile</p>
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 dropdown-item"
                        >
                          <i className="ti ti-mail fs-6"></i>
                          <p className="mb-0 fs-3">My Account</p>
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 dropdown-item"
                        >
                          <i className="ti ti-list-check fs-6"></i>
                          <p className="mb-0 fs-3">My Task</p>
                        </a>
                        <a
                          href="./authentication-login.js"
                          className="btn btn-outline-primary mx-3 mt-2 d-block"
                        >
                          Logout
                        </a>
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
                  <h5 className="card-title fw-semibold mb-4">Forms</h5>
                  <div className="card">
                    <div className="card-body">
                      <form>
                        <div className="mb-3">
                          <label
                            for="exampleInputEmail1"
                            className="form-label"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                          <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                          </div>
                        </div>
                        <div className="mb-3">
                          <label
                            for="exampleInputPassword1"
                            className="form-label"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                        <div className="mb-3 form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            for="exampleCheck1"
                          >
                            Check me out
                          </label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                  <h5 className="card-title fw-semibold mb-4">
                    Disabled forms
                  </h5>
                  <div className="card mb-0">
                    <div className="card-body">
                      <form>
                        <fieldset disabled>
                          <legend>Disabled fieldset example</legend>
                          <div className="mb-3">
                            <label
                              for="disabledTextInput"
                              className="form-label"
                            >
                              Disabled input
                            </label>
                            <input
                              type="text"
                              id="disabledTextInput"
                              className="form-control"
                              placeholder="Disabled input"
                            />
                          </div>
                          <div className="mb-3">
                            <label for="disabledSelect" className="form-label">
                              Disabled select menu
                            </label>
                            <select id="disabledSelect" className="form-select">
                              <option>Disabled select</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="disabledFieldsetCheck"
                                disabled
                              />
                              <label
                                className="form-check-label"
                                for="disabledFieldsetCheck"
                              >
                                Can't check this
                              </label>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="../../public/libs/jquery/dist/jquery.min.js"></script>
      <script src="../../public/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
      <script src="../../public/js/sidebarmenu.js"></script>
      <script src="../../public/js/app.min.js"></script>
      <script src="../../public/libs/simplebar/dist/simplebar.js"></script>
    </div>
  );
}

export default UiForms;