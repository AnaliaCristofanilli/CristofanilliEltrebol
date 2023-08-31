/* eslint-disable react/prop-types */
import ItemCount from "./ItemCount";

const ItemDetail = ({ productos }) => {
  return (
    <div className="d-flex justify-content-center mx-auto">
      <div key={productos.id} className="card" style={{ width: "18rem" }}>
        <img src={productos.pictureUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{productos.nombre}</h4>
          <h5 className="card-title">{productos.descripcion}</h5>
          <p className="card-text">
            <b>
              ${" "}
              {new Intl.NumberFormat("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(productos.precio)}
            </b>
          </p>
          <ItemCount
            id={productos.id}
            stock={productos.stock}
            categoria={productos.categoria}
            nombre={productos.nombre}
            descripcion={productos.descripcion}
            precio={productos.precio}
            idDB={productos.idDB}
          ></ItemCount>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
