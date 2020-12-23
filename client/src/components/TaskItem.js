import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form, List } from "semantic-ui-react";
import { deleteTask, setEditingTask } from "../actions";

const TaskItem = ({ task, deleteTask, setEditingTask }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <List divided verticalAlign="middle">
      <List.Item>
        <Form.Checkbox onClick={handleCheck} />
        <List.Content floated="right">
          <Button onClick={() => deleteTask(task.id)}>Delete</Button>
          <Button onClick={() => setEditingTask(task)}>Edit</Button>
        </List.Content>
        <List.Content
          style={{ textDecoration: `${isChecked ? "line-through" : ""}` }}
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </List.Content>
      </List.Item>
    </List>
  );
};

export default connect(null, { deleteTask, setEditingTask })(TaskItem);
