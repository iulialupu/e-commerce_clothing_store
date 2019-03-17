import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import filtersReducer from "./filtersReducer";
import imageReducer from "./imageReducer";
import collectionReducer from "./collectionReducer";
import wishlistReducer from "./wishlistReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  products: productsReducer,
  filters: filtersReducer,
  activeImageIndex: imageReducer,
  collectionProducts: collectionReducer,
  wishlist: wishlistReducer,
  cart: cartReducer
});
