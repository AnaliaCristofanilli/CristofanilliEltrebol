/* eslint-disable react/prop-types */
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="card-group bg-transparent">
      {productos.map((producto) => {
        return (
          <Item
            nombre={producto.nombre}
            precio={producto.precio}
            pictureUrl={producto.pictureUrl}
            key={producto.id}
            id={producto.id}
            categoria={producto.categoria}
            idDB={producto.idDB}
          ></Item>
        );
      })}
    </div>
  );
};

export default ItemList;
