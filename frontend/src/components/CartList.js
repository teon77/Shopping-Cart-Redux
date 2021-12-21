import { useSelector, useDispatch } from "react-redux";
import { checkOut } from "../actions";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let total = 0;
  return (
    <div>
      <h1>Cart Items</h1>
      {cart.map((productEntry, index) => {
        total += productEntry.price;
        return <CartItem object={productEntry} key={index} />;
      })}
      <span>Total: {total}$</span>
      <br />
      <button
        disabled={total === 0}
        onClick={() => {
          dispatch(checkOut(total));
          total = 0;
        }}
      >
        Checkout
      </button>
    </div>
  );
};

const CartItem = ({ object }) => {
  return (
    <div>
      <p>{object.name + "  $" + object.price}</p>
    </div>
  );
};

export default Cart;
