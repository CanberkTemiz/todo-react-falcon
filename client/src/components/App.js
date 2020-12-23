import React from "react";
import TaskList from "./TaskList";
import TaskAdd from "./TaskAdd";

const App = () => {
  return (
    <div className="App">
      <TaskAdd />
      <TaskList />
    </div>
  );
};

export default App;
