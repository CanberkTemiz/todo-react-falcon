import localApi from "../apis/localApi";

export const fetchTasks = () => async (dispatch) => {
  const response = await localApi.get("/tasks");

  dispatch({ type: "FETCH_TASKS", payload: response.data });
};
