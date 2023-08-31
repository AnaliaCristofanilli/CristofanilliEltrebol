import { useContext } from "react";
import CartContext from "../context/cartContex";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const Cart = () => {
  const { cart, emptyCart, longitud, deleteItemCart } = useContext(CartContext);

  const borrarCarrito = () => {
    confirmAlert({
      title: "Borrar el carrito",
      message: "Confirma ?",
      buttons: [
        {
          label: "Si",
          onClick: () => emptyCart(),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const borrarItemCarrito = (id) => {
    confirmAlert({
      title: "Borrar item del carrito",
      message: "Confirma ?",
      buttons: [
        {
          label: "Si",
          onClick: () => deleteItemCart(id),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const importeTotal = cart.reduce(
    (accum, item) => accum + parseInt(item.cantidad) * parseFloat(item.precio),
    0
  );

  return (
    <div className="container mt-3 border border-3 rounded">
      <h3 className="text-center mt-2">Detalle del carrito</h3>
      <div className="row mt-2">
        <div className="col-12">
          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Categoría</th>
                <th>Cantidad</th>
                <th>Precio total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {longitud == 0 ? (
                <tr>
                  <td colSpan={6}>
                    <h4 className="text-center">
                      No existen productos en el carrito
                    </h4>
                  </td>
                </tr>
              ) : (
                cart.map((Product) => (
                  <tr key={Product.id}>
                    <td>{Product.nombre}</td>
                    <td>{Product.descripcion}</td>
                    <td>{Product.categoria}</td>
                    <td>{Product.cantidad}</td>
                    <td>
                      {new Intl.NumberFormat("es-AR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }).format(Product.precio)}
                    </td>
                    <td className="text-center">
                      <button className="btn btn-success">
                        <Link className="nav-link" to={`/item/${Product.idDB}`}>
                          Modificar
                        </Link>
                      </button>
                      &nbsp;
                      <button
                        className="btn btn-success"
                        onClick={() => borrarItemCarrito(Product.idDB)}
                      >
                        Borrar
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4} className="text-end">
                  <b>Importe Total</b>
                </td>
                <td>
                  <b>
                    {" "}
                    {new Intl.NumberFormat("es-AR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(importeTotal)}
                  </b>
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div className="row p-2">
        <div className="col-12 text-center">
          <button
            className="btn btn-success"
            disabled={longitud == 0}
            onClick={borrarCarrito}
          >
            Borrar Carrito
          </button>
          &nbsp;
          <button className="btn btn-success" disabled={longitud == 0}>
            <Link className="nav-link" to={`/comprar`}>
              Comprar
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
