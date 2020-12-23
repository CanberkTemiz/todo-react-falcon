import { editTask } from "../actions";

const initialState = {
  tasks: [],
  editingTask: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TASKS":
      return {
        ...state,
        tasks: action.payload,
      };

    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: [...state.tasks.filter((item) => item.id !== action.payload.id)],
      };

    case "EDIT_TASK":
      console.log(state, action);
      return {
        editingTask: null,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };

    case "SET_EDITING_TASK":
      return { ...state, editingTask: action.payload };

    default:
      return state;
  }
};
