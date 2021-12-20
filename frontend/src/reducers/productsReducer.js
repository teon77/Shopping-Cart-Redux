const productsArr = [
  { name: "iPhone 10", price: 500, quantity: 10, available: true },
  { name: "Galaxy 11", price: 1000, quantity: 8, available: true },
  { name: "Banana", price: 5, quantity: 20, available: true },
];

const productsReducer = (state = productsArr, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (action.payload.quantity === 0) return state;
      let newArr = [...state]; // fixing immutability problem
      const foundIndex = newArr.findIndex(
        (entry) => entry.name === action.payload.name
      );
      if (newArr[foundIndex].quantity === 0) {
        newArr[foundIndex].available = false;
        alert("This item is out of Stock");
        return newArr;
      }
      newArr[foundIndex].quantity--;
      return newArr;
    default:
      return state;
  }
};

export default productsReducer;
