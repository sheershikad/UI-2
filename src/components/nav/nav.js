import "./nav.css";
function Nav() {
  return (
    <div className="nav-bar">
      <div className="logo-contents">
        <nav className="navbar navbar-expand-lg container">
          <div className="container">
            <a className="navbar-brand" href="#homelogo">
              <img className="logo" src="./images/cnx-logo-white.png" />
            </a>
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 " id="nav-text">
                <li className="nav-item" id="nav-text">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#homepage"
                  >
                    HOME
                  </a>
                </li>
                <li className="nav-item" id="nav-text">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#homepage"
                  >
                    ABOUT
                  </a>
                </li>
                <li className="nav-item" id="nav-text">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#homepage"
                  >
                    SERVICES
                  </a>
                </li>
                <li className="nav-item" id="nav-text">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#homepage"
                  >
                    PROFILE
                  </a>
                </li>
                <li className="nav-item" id="nav-text">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#homepage"
                  >
                    BLOG
                  </a>
                </li>
                <li className="nav-item" id="nav-text">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#homepage"
                  >
                    CONTACT
                  </a>
                </li>

                {/* <li class="nav-item">
                                <a class="nav-link" href="#About">About</a>
                            </li> */}
                {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#services" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#loans">Loans</a></li>
                                    <li><a class="dropdown-item" href="#support team">Support Team</a></li>
                                </ul>
                            </li> */}
                {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#carees" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Carees
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#developer">Developer</a></li>
                                    <li><a class="dropdown-item" href="#R&D">R&D</a></li>
                                </ul>
                            </li> */}
                {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#pages" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Pages
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#register">Register</a></li>
                                    <li><a class="dropdown-item" href="#login">Login</a></li>
                                </ul>
                            </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="nav-icons">
        <i className="fa fa-facebook"></i>
        <i className="fa fa-twitter"></i>
        <i className="fa fa-wifi"></i>
        <i className="fa fa-search"></i>
      </div>
    </div>
  );
}

export default Nav;
