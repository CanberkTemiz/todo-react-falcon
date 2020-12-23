import React from "react";
import { connect } from "react-redux";
import { fetchTasks } from "../actions";
import TaskItem from "./TaskItem";

class TaskList extends React.Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  renderedList() {
    return this.props.tasks.map((task) => {
      return (
        <div className="item" key={task.id}>
          <TaskItem task={task} />
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderedList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { tasks: state.taskReducer.tasks };
};

export default connect(mapStateToProps, { fetchTasks })(TaskList);
