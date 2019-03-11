import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
