export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_FILTER":
      return { ...state, ...action.payload };
    case "REMOVE_FILTER":
      return { ...state };
    default:
      return state;
  }
};
