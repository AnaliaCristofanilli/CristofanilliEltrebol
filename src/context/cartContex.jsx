/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const longitud = cart.length;

  const deleteItemCart = (id) => {
    //Buscar si existe el producto en el carrito
    const productoCart = cart.filter((p) => p.idDB == id);
    if (productoCart.length > 0) {
      //Eliminar producto
      setCart((current) => current.filter((producto) => producto.idDB !== id));
    }
  };

  const emptyCart = () => {
    setCart([]);
  };

  const addCart = (item) => {
    const cartState = cart.map((prodCart) => prodCart);
    //console.log(cartState);

    if (cartState.length == 0) {
      //Carrito vacío
      if (item.cantidad > 0) {
        //Agregar producto
        setCart((cart) => [...cart, item]); //agrega producto al final del arreglo
      }
    } else {
      //Buscar si existe el producto en el carrito
      const productoCart = cart.filter((p) => p.idDB == item.idDB);
      //console.log(productoCart);

      if (productoCart.length == 0) {
        //Agregar producto
        setCart((cart) => [...cart, item]); //agrega producto al final del arreglo
      } else {
        //producto encontrado en el carrito
        if (item.cantidad == 0) {
          //Eliminar producto con cantidad = 0
          setCart((current) =>
            current.filter((producto) => producto.idDB !== item.idDB)
          );
        } else {
          //actualizar cantidad en el producto del carrito
          const nextCart = cart.map((product) => {
            if (product.idDB != item.idDB) {
              return product;
            } else {
              return {
                ...product,
                cantidad: item.cantidad,
              };
            }
          });
          setCart(nextCart);
        }
      }
    }
  };

  useEffect(() => {
    //console.log(cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addCart, longitud, emptyCart, deleteItemCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
