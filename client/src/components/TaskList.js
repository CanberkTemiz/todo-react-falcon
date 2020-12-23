import React from "react";
import { connect } from "react-redux";
import { fetchTasks } from "../actions";

class TaskList extends React.Component {
  componentDidMount() {
    console.log(this.props.fetchTasks());
  }
  render() {
    return <div>TaskList</div>;
  }
}

export default connect(null, { fetchTasks })(TaskList);
