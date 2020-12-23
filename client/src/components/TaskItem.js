import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteTask, editTask } from "../actions";
import TaskAdd from "./TaskAdd";

const TaskItem = ({ task, deleteTask }) => {
  const [enableEdit, setEnableEdit] = useState(false);

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div>
      {!enableEdit ? (
        <>
          <h1>{task.title}</h1>
          <h3>{task.description}</h3>
        </>
      ) : (
        <TaskAdd editTaskId={task.id} />
      )}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => setEnableEdit(true)}>Edit</button>
    </div>
  );
};

export default connect(null, { deleteTask, editTask })(TaskItem);
