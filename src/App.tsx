import "./App.css";
import CartProducts from "./CartProducts/CartProducts";
import ListOfProducts from "./Products/Products";

function App() {
  return (
    <div className="App">
      <ListOfProducts />
      <CartProducts />
    </div>
  );
}

export default App;
