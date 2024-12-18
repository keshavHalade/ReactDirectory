import React from "react";
import Header from "../Reusable/Header";
import TaskCount from "../Reusable/TaskCount";
import "./UserDashboard.css";
import TaskList from "../Reusable/TaskList";
function UserDasboard({data}) {
  console.log(data);
  return (
    <div className="dashBoard">
      <Header />
      <main>
        <TaskCount />
        <TaskList />
      </main>
    </div>
  );
}

export default UserDasboard;
