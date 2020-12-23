export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_TASKS":
      return action.payload;
    case "ADD_TASK":
      return [...state, action.payload];
    case "REMOVE_TASKS":
      return "REMOVE_TASKS";
    case "EDIT_TASKS":
      return "EDIT_TASKS";
    default:
      return state;
  }
};
