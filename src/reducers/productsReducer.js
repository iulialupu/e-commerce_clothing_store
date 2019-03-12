import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_FIRST_PRODUCTS":
      return { ..._.mapKeys(action.payload, "id") };
    case "FETCH_REST_PRODUCTS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
