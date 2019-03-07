import products from "../apis/products";

export const fetchProducts = () => async dispatch => {
  const response = await products.get("/products");

  dispatch({ type: "FETCH_PRODUCTS", payload: response.data });
};
