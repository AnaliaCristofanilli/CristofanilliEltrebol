/* eslint-disable react/prop-types */
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();

  const filterProducts = productos.filter((producto) => producto.id == id);

  return (
    <div className="d-flex justify-content-center">
      {filterProducts.map((producto) => {
        return (
          <div key={producto.id} className="card" style={{ width: "18rem" }}>
            <img src={producto.pictureUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{producto.nombre}</h4>
              <h5 className="card-title">{producto.descripcion}</h5>
              <p className="card-text">
                <b>$ {producto.precio}</b>
              </p>
              <ItemCount stock={producto.stock}></ItemCount>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetail;
