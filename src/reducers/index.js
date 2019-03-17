import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import productsReducer from "./productsReducer";
import filtersReducer from "./filtersReducer";
import imageReducer from "./imageReducer";
import collectionReducer from "./collectionReducer";

export default combineReducers({
  products: productsReducer,
  filters: filtersReducer,
  activeImageIndex: imageReducer,
  collectionProducts: collectionReducer,
  form: formReducer
});
