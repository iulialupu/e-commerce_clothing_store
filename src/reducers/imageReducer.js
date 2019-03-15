const initialState = {
  scrolledImageIndex: null,
  clickedImageIndex: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_ACTIVE_IMAGE_SCROLL":
      return { ...state, scrolledImageIndex: action.payload };
    case "CHANGE_ACTIVE_IMAGE_CLICK":
      return { ...state, clickedImageIndex: action.payload };
    default:
      return state;
  }
};
