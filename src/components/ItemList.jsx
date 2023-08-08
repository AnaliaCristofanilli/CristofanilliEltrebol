/* eslint-disable react/prop-types */
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
      <div className="card-group">
        {productos.map((producto) => {
          return (
               <Item
                nombre={producto.nombre}
                precio={producto.precio}
                pictureUrl={producto.pictureUrl}
                key={producto.id}
                id={producto.id}
              ></Item>
         
          );
        })}
      </div>
  );
};

export default ItemList;
