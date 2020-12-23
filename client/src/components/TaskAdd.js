import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addTask, editTask } from "../actions";
// import { getTaskById } from "../reducers/taskReducer";

const INITIAL = {
  title: "",
  description: "",
};

const TaskAdd = ({ addTask, editTask, editingTask }) => {
  const [values, setValues] = useState(INITIAL);

  const handleSubmit = (e) => {
    e.preventDefault();

    editingTask ? editTask({ ...editingTask, ...values }) : addTask(values);
    setValues(INITIAL);
  };

  const updateField = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (editingTask) {
      setValues({
        title: editingTask.title,
        description: editingTask.description,
      });
    }
  }, [editingTask]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={values.title}
        name="title"
        onChange={updateField}
        placeholder="title"
      />
      <input
        value={values.description}
        name="description"
        onChange={updateField}
        placeholder="description"
      />
      <button type="submit">{editingTask ? "save changes" : "add"}</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    editingTask: state.taskReducer.editingTask,
  };
};

export default connect(mapStateToProps, { addTask, editTask })(TaskAdd);
