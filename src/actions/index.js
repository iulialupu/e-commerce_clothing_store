import products from "../apis/products";

export const fetchFirstProducts = search => async dispatch => {
  const response = await products.get(`/products/?_page=1&_limit=10&${search}`);

  dispatch({ type: "FETCH_FIRST_PRODUCTS", payload: response.data });
};
export const fetchRestProducts = (count, search) => async dispatch => {
  const response = await products.get(
    `/products/?_page=${count}&_limit=10&${search}`
  );

  dispatch({ type: "FETCH_REST_PRODUCTS", payload: response.data });
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
