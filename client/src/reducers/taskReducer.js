export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_TASKS":
      return action.payload;
    case "ADD_TASKS":
      return "ADD_TASKS";
    case "REMOVE_TASKS":
      return "REMOVE_TASKS";
    case "EDIT_TASKS":
      return "EDIT_TASKS";
    default:
      return state;
  }
};
