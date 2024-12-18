import React from "react";

function TaskCard() {
  return (
    <div>
      <div className="task">
        <div className="task-title">
          <h2>Task Title</h2>
        </div>
        <div className="task-description">
          <h4>Task Description</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            doloremque nisi dolor, voluptate quis quia. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Voluptate, quaerat laudantium
            excepturi nesciunt quam fugiat.
          </p>
        </div>
        <div className="task-info">
          <div className="task-status">Accepted</div>
          <div className="task-due-date">12th Dec</div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
