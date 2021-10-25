const AlertReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ALERT":
      return {
        alert: action.payload.message,
        type: action.payload.type
      };
    case "REMOVE_ALERT":
      return {
        alert: null,
        type: null
      };
    default:
      return { ...state };
  }
};

export default AlertReducer;
