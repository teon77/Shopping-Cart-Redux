import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions";
const Products = () => {
  const products = useSelector((state) => state.products);

  return (
    <div>
      {products.map((productEntry, index) => (
        <Product object={productEntry} key={index} />
      ))}
    </div>
  );
};

const Product = ({ object }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        {object.name + "  $" + object.price + " quantity: " + object.quantity}
      </p>
      <button
        disabled={!object.available}
        onClick={() => dispatch(addToCart(object))}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default Products;
