import products from "../apis/products";

export const fetchProducts = search => async dispatch => {
  const response = await products.get(`/products/?${search}`);

  dispatch({ type: "FETCH_PRODUCTS", payload: response.data });
};

export const fetchProductById = id => async dispatch => {
  const response = await products.get(`/products/${id}`);

  dispatch({ type: "FETCH_PRODUCT_BY_ID", payload: response.data });
};

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

export const fetchProductsByCollection = collection => async dispatch => {
  const response = await products.get(`/products/?collection=${collection}`);

  dispatch({ type: "FETCH_PRODUCTS_BY_COLLECTION", payload: response.data });
};
