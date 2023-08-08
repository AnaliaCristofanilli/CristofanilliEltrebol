import Home from "./components/Home";
import Cart from "./components/Cart";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>        
      <NavBar /> 
      <Routes>
        <Route exact path="/" element={<Home greeting="Bienvenidos a nuestro sitio" />}/> 
        <Route exact path="/cart" element={<Cart> </Cart>}/> 
        <Route exact path="/categoria/:cat" element={<ItemListContainer> </ItemListContainer>}/> 
        <Route exact path="/item/:id" element={<ItemDetailContainer> </ItemDetailContainer>}/> 
      </Routes>


      
  
    </BrowserRouter>
  );
};

export default App;
