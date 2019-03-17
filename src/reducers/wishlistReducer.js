export default (state = [], action) => {
  switch (action.type) {
    case "ADD_WISHLIST_ITEM":
      return [...state, action.payload];
    case "REMOVE_WISHLIST_ITEM":
      return state.filter(item => item !== action.payload);
    default:
      return state;
  }
};
