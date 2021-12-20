export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const checkOut = (total) => {
  return {
    type: "CHECKOUT",
    payload: total,
  };
};
