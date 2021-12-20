const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const picked = (({ name, price }) => ({ name, price }))(action.payload); // getting only the keys we want for cart
      state.push(picked);
      return state;
    default:
      return state;
  }
};

export default cartReducer;
