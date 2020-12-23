import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask, editTask } from "../actions";

const INITIAL = {
  title: "",
  description: "",
};

const TaskAdd = ({ addTask, editTask, editTaskId = false }) => {
  const [values, setValues] = useState(INITIAL);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTaskId ? editTask(editTaskId, values) : addTask(values);
  };

  const updateField = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

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
      <button type="submit">Add Task</button>
    </form>
  );
};

export default connect(null, { addTask, editTask })(TaskAdd);
