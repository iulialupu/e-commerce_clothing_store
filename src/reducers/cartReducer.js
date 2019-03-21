import { omit } from "lodash";
let newObj = {};

export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, [action.payload.id]: action.payload };
    case "INCREMENT_AMOUNT":
      newObj = {
        ...state[action.payload],
        amount: state[action.payload].amount + 1
      };
      return {
        ...state,
        [action.payload]: newObj
      };
    case "DECREMENT_AMOUNT":
      newObj = {
        ...state[action.payload],
        amount: state[action.payload].amount - 1
      };
      return {
        ...state,
        [action.payload]: newObj
      };
    case "REMOVE_FROM_CART":
      return omit(state, action.payload);
    case "CLEAR_CART":
      return {};
    default:
      return state;
  }
};
