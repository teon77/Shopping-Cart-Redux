import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default allReducers;
