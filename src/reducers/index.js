import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import filtersReducer from "./filtersReducer";
import imageReducer from "./imageReducer";

export default combineReducers({
  products: productsReducer,
  filters: filtersReducer,
  activeImageIndex: imageReducer
});
