import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { ..._.mapKeys(action.payload, "id") };
    case "FETCH_PRODUCT_BY_ID":
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
