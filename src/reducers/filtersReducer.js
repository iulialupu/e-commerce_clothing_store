import { omit } from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_FILTER":
      return { ...state, ...action.payload };
    case "REMOVE_FILTER":
      return omit(state, action.payload);
    default:
      return state;
  }
};
