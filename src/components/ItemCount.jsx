/* eslint-disable react/prop-types */
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import CartContext from "../context/cartContex";
import { Link } from "react-router-dom";

const ItemCount = ({
  id,
  stock,
  categoria,
  nombre,
  descripcion,
  precio,
  idDB,
}) => {
  const [contador, setContador] = useState(0);
  const { cart, addCart } = useContext(CartContext);

  const sumar = () => {
    if (contador + 1 <= stock) setContador(contador + 1);
  };
  const restar = () => {
    if (contador - 1 >= 0) setContador(contador - 1);
  };
  const verificarCantidad = (e) => {
    if (e <= stock) setContador(e);
  };

  useEffect(() => {
    const productCart = cart.filter((p) => p.id == id);
    setContador(productCart.length == 0 ? 0 : productCart[0].cantidad);
  }, [cart, id]);

  return (
    <div>
      <InputGroup className="mb-3">
        <Button variant="outline-secondary" id="button-addon1" onClick={restar}>
          -
        </Button>
        <Form.Control
          aria-label="Cantidad"
          aria-describedby="  "
          value={contador}
          onChange={(e) => verificarCantidad(e.target.value)}
          className="text-center"
        />
        <Button variant="outline-secondary" id="button-addon1" onClick={sumar}>
          +
        </Button>
      </InputGroup>
      <div className="text-center">
        <button className="btn btn-success">
          <Link className="nav-link" to={`/categoria/${categoria}`}>
            Volver
          </Link>
        </button>
        &nbsp;
        <button
          className="btn btn-success "
          disabled={contador == 0}
          onClick={() =>
            addCart({
              id: id,
              cantidad: contador,
              nombre: nombre,
              descripcion: descripcion,
              precio: precio,
              categoria: categoria,
              idDB: idDB,
            })
          }
        >
          <Link className="nav-link" to={`/categoria/${categoria}`}>
            Agregar
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
