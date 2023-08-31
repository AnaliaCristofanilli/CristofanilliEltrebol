import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const handleSubmit = (e) => {
  e.preventDefault();
};

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <div className="row align-middle">
            <div className="col-3 d-inline-block">
              <img
                alt="Librería El trébol"
                src="../assets/images/Eltrebol.png"
                width="60em"
                height="60em"
              />
            </div>
            <div className="col-9 mt-1">
              <div className="fs-4">Librería El trébol</div>
            </div>
          </div>
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
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorías
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="nav-item">
                  <Link className="nav-link" to={"/categoria/cole"}>
                    El Cole
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/categoria/ofi"}>
                    La Ofi
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/categoria/arte"}>
                    El Arte
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/categoria/ofertas"}>
                    Ofertas
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <Link to={"/cart"}>
            <CartWidget></CartWidget>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
