export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_BY_COLLECTION":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
