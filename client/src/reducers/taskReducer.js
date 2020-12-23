export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_TASKS":
      return action.payload;

    case "ADD_TASK":
      return [action.payload, ...state];

    case "DELETE_TASKS":
      return state.filter((el) => el.id !== action.payload);

    case "EDIT_TASKS":
      return [
        state.map((task) =>
          task.id === action.payload.id ? action.payload.values : task
        ),
      ];
    default:
      return state;
  }
};
