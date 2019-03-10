import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "FETCH_BY_FILTER":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
