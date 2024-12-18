import React from "react";
import "./TaskList.css";
import TaskCard from "./TaskCard";

function TaskList() {
  return (
    <div className="task-list">

        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      
    </div>
  );
}

export default TaskList;
