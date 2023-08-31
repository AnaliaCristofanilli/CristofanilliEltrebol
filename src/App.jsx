import Home from "./components/Home";
import Cart from "./components/Cart";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContex";
import Compra from "./components/Compra";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home greeting="Bienvenidos a Librería El Trébol!" />}
          />
          <Route exact path="/cart" element={<Cart> </Cart>} />
          <Route
            exact
            path="/categoria/:cat"
            element={<ItemListContainer> </ItemListContainer>}
          />
          <Route
            exact
            path="/item/:id"
            element={<ItemDetailContainer> </ItemDetailContainer>}
          />
          <Route exact path="/comprar" element={<Compra />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
