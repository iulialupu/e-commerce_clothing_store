import products from "../apis/products";

export const fetchProducts = search => async dispatch => {
  const response = await products.get(`/products/?${search}`);

  dispatch({ type: "FETCH_PRODUCTS", payload: response.data });
};

export const fetchProductById = id => async dispatch => {
  const response = await products.get(`/products/${id}`);

  dispatch({ type: "FETCH_PRODUCT_BY_ID", payload: response.data });
};

// COLLECTION/ SEE ALSO SECTION
export const fetchProductsByCollection = collection => async dispatch => {
  const response = await products.get(`/products/?collection=${collection}`);

  dispatch({ type: "FETCH_PRODUCTS_BY_COLLECTION", payload: response.data });
};

// FILTERS
export const addFilter = filter => {
  return {
    type: "ADD_FILTER",
    payload: filter
  };
};

export const removeFilter = key => {
  return {
    type: "REMOVE_FILTER",
    payload: key
  };
};

// SLIDER IMAGE
export const changeActiveImageIndexScroll = index => {
  return {
    type: "CHANGE_ACTIVE_IMAGE_SCROLL",
    payload: index
  };
};

export const changeActiveImageIndexClick = index => {
  return {
    type: "CHANGE_ACTIVE_IMAGE_CLICK",
    payload: index
  };
};

// WISHLIST
export const addWishlistItem = id => {
  return {
    type: "ADD_WISHLIST_ITEM",
    payload: id
  };
};

export const removeWishlistItem = id => {
  return {
    type: "REMOVE_WISHLIST_ITEM",
    payload: id
  };
};

// CART
export const addToCart = product => {
  return {
    type: "ADD_TO_CART",
    payload: product
  };
};

export const removeFromCart = id => {
  return {
    type: "ADD_TO_CART",
    payload: id
  };
};
