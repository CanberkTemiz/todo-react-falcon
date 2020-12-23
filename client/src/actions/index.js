import localApi from "../apis/localApi";

export const fetchTasks = () => async (dispatch) => {
  const response = await localApi.get("/tasks");

  dispatch({ type: "FETCH_TASKS", payload: response.data });
};

export const addTask = (task) => async (dispatch) => {
  const response = await localApi.post("/tasks", task);

  dispatch({ type: "ADD_TASK", payload: response.data });
};

export const deleteTask = (id) => async (dispatch) => {
  const response = await localApi.delete(`/tasks/${id}`);

  dispatch({ type: "DELETE_TASK", payload: response.data });
};

export const editTask = (task) => async (dispatch) => {
  const response = await localApi.patch(`/tasks/${task.id}`, task);

  dispatch({ type: "EDIT_TASK", payload: response.data });
};

export const setEditingTask = (task) => (dispatch) => {
  dispatch({ type: "SET_EDITING_TASK", payload: task });
};
