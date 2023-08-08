/* eslint-disable react/prop-types */
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { useState } from "react";

const ItemCount = (props) => {
  const { stock } = props;
  const [contador, setContador] = useState(0);
  const sumar = () => {
    if (contador + 1 <= stock) setContador(contador + 1);
  };
  const restar = () => {
    if (contador - 1 >= 0) setContador(contador - 1);
  };
  const verificarCantidad = (e) => {
    if (e <= stock) setContador(e);
  };
  return (
    <div>
      <InputGroup className="mb-3">
        <Button variant="outline-secondary" id="button-addon1" onClick={sumar}>
          +
        </Button>
        <Form.Control
          aria-label="Cantidad"
          aria-describedby="  "
          value={contador}
          onChange={(e) => verificarCantidad(e.target.value)}
          className="text-center"
        />
        <Button variant="outline-secondary" id="button-addon1" onClick={restar}>
          -
        </Button>
      </InputGroup>
    </div>
  );
};

export default ItemCount;
