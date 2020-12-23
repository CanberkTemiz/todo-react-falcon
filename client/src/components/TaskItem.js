import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteTask, setEditingTask } from "../actions";

const TaskItem = ({ task, deleteTask, setEditingTask }) => {
  return (
    <div>
      <h1>{task.title}</h1>
      <h3>{task.description}</h3>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => setEditingTask(task)}>Edit</button>
    </div>
  );
};

export default connect(null, { deleteTask, setEditingTask })(TaskItem);
