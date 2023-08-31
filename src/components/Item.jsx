/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Item = ({ nombre, precio, pictureUrl, idDB }) => {
  return (
    <div className="d-flex mx-auto ">
      <div className="card " style={{ width: "18rem", margin: "8px" }}>
        <img src={pictureUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">
            <b>
              ${" "}
              {new Intl.NumberFormat("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(precio)}
            </b>
          </p>
          <button className="btn btn-success">
            <Link className="nav-link" to={`/item/${idDB}`}>
              Detalle
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
