import React from "react";
import TaskList from "./TaskList";
import TaskAdd from "./TaskAdd";

const App = () => {
  return (
    <div className="ui segment center">
      <TaskAdd />
      <TaskList />
    </div>
  );
};

export default App;
