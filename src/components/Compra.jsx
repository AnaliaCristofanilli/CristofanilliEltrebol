import { useContext, useState } from "react";
import CartContext from "../context/cartContex";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const Compra = () => {
  const { cart, emptyCart } = useContext(CartContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [orderId, setOrderId] = useState(null);
  const [dataSended, setDataSended] = useState("N");

  const db = getFirestore();
  const orderCollection = collection(db, "ordenes");
  const ValidarDatos = () => {
    if (name === "" || phone === "" || email === "") {
      return false;
    }

    if (email.indexOf("@") == -1) {
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Crear objeto orden
    const order = {
      buyer: {
        name,
        email,
        phone,
      },
      date: new Date(),
      items: [...cart],
      total: importeTotal,
    };

    console.log(order);

    //Generar orden
    addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
    //Vaciar Carrito
    emptyCart();
    setDataSended("S");
  };

  const importeTotal = cart.reduce(
    (accum, item) => accum + parseInt(item.cantidad) * parseFloat(item.precio),
    0
  );

  return (
    <div className="container">
      {dataSended == "N" ? (
        <>
          <div className="border border-3 rounded mt-2 p-3 bg-body-tertiary">
            <h3>Datos de la Compra</h3>
            <div className="mt-3">
              <div className="container">
                <table className="table table-striped mt-3">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Descripción</th>
                      <th>Categoría</th>
                      <th>Cantidad</th>
                      <th>Precio total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((Product) => (
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
                      </tr>
                    ))}
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
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
          <div className="border border-3 rounded mt-2 p-3 bg-body-tertiary">
            <h3>Datos Personales</h3>
            <form onSubmit={handleSubmit}>
              <div className="row mt-4">
                <div className="col-2">
                  <label className="label-control">Apellido y Nombre</label>
                </div>
                <div className="col-10">
                  <input
                    type="text"
                    value={name}
                    placeholder=""
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    autoFocus
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-2">
                  <label className="label-control">Email</label>
                </div>
                <div className="col-10">
                  <input
                    type="text"
                    value={email}
                    placeholder="mail@com"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-2">
                  <label className="label-control">Teléfono</label>
                </div>
                <div className="col-10">
                  <input
                    type="text"
                    value={phone}
                    placeholder=""
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-12 text-end">
                  <input
                    type="submit"
                    value="Enviar Datos"
                    className="btn btn-success"
                    disabled={!ValidarDatos()}
                  />
                </div>
              </div>
            </form>
          </div>
        </>
      ) : (
        <div className="mt-2 p-3">
          <h4>Datos de la Orden</h4>
          <div className="row mt-4">
            <div className="col-12">
              <table className="table table-bordered table-secondary w-75">
                <tbody>
                  <tr>
                    <td>Nro. de Orden</td>
                    <td>
                      <b>{orderId}</b>
                    </td>
                  </tr>
                  <tr>
                    <td>Nombre</td>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{email}</td>
                  </tr>
                  <tr>
                    <td>Teléfono</td>
                    <td>{phone}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td className="text-center" colSpan={2}>
                      <button className="btn btn-success">
                        <Link className="nav-link" to={"/"}>
                          Ir al Home
                        </Link>
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Compra;
