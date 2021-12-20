import "./index.css";
import ProductsList from "./components/ProductsList";
import CartList from "./components/CartList";

function App() {
  return (
    <div className="App">
      <ProductsList />
      <CartList />
    </div>
  );
}

export default App;
