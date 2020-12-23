import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addTask, editTask } from "../actions";
import { Button, Form, FormGroup } from "semantic-ui-react";

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
    <Form onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          value={values.title}
          name="title"
          onChange={updateField}
          placeholder="title"
          required
        />

        <Form.Input
          fluid
          value={values.description}
          name="description"
          onChange={updateField}
          placeholder="description"
        />
        <Form.Button>{editingTask ? "save changes" : "add"}</Form.Button>
      </Form.Group>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    editingTask: state.taskReducer.editingTask,
  };
};

export default connect(mapStateToProps, { addTask, editTask })(TaskAdd);
