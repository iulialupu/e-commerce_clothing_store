import products from "../apis/products";

export const fetchProducts = () => async dispatch => {
  const response = await products.get("/products");

  dispatch({ type: "FETCH_PRODUCTS", payload: response.data });
};

export const fetchProductsByFilter = search => async dispatch => {
  const response = await products.get(`/products/${search}`);

  dispatch({ type: "FETCH_BY_FILTER", payload: response.data });
};

export const addFilter = filter => {
  return {
    type: "ADD_FILTER",
    payload: filter
  };
};
