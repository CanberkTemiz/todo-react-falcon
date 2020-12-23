import React from "react";
import { connect } from "react-redux";
import { fetchTasks } from "../actions";

class TaskList extends React.Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  renderedList() {
    return this.props.tasks.map((task) => {
      return (
        <div className="item" key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderedList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { tasks: state.tasks };
};

export default connect(mapStateToProps, { fetchTasks })(TaskList);
