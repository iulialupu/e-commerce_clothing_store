import { omit } from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, [action.payload.id]: action.payload };
    // case "UPDATE_CART_ITEM":
    // return { ...state, [action.payload.id].amount : action.payload.amount };
    case "REMOVE_FROM_CART":
      return omit(state, action.payload);
    default:
      return state;
  }
};
