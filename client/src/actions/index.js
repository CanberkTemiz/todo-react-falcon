import localApi from "../apis/localApi";

export const fetchTasks = () => async (dispatch) => {
  const response = await localApi.get("/tasks");

  dispatch({ type: "FETCH_TASKS", payload: response.data });
};

export const addTask = (task) => async (dispatch) => {
  const response = await localApi.post("/tasks", { ...task });

  dispatch({ type: "ADD_TASK", payload: response.data });
};
