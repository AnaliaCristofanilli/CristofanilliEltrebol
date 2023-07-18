import { Button, Stack } from "react-bootstrap";

const CartWidget = () => {
  return (
    <Button variant="success" className=" bg-body-tertiary buttonCarrito">
    <Stack direction="horizontal" gap={1}>

      <img
        alt="Librería El trébol"
        src="../assets/images/carrito.png"
        width="130%"
        height="130%"
        className="d-inline-block align-middle"
      />
      <div> 0 </div>
    </Stack>
    </Button>
  );
};

export default CartWidget;
