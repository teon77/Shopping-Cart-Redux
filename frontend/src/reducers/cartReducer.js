const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newArr = [...state]; // fixing immutability problem
      const picked = (({ name, price }) => ({ name, price }))(action.payload); // getting only the keys we want for cart
      newArr.push(picked);
      return newArr;
    case "CHECKOUT":
      alert(
        `You are about to check out. \nTotal order cost: ${action.payload}`
      );
      return state;
    default:
      return state;
  }
};

export default cartReducer;
