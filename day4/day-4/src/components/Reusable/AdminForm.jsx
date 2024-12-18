import React, { useState } from "react";

function AdminForm() {
  const [assignedDate, setAssignedDate] = useState(new Date());

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assigedTo, setAssigedTo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
    console.log(assignedDate);
    console.log(title);
    console.log(desc);
    console.log(dueDate);
    console.log(assigedTo);
    setTitle("");
    setDesc("");
    setDueDate("");
    setAssigedTo("");
  };

  return (
    <div className="admin-form">
      <form onSubmit={(e) => submitHandler(e)}>
        <h2>Create Task</h2>
        <div>
          <label>Task Title:</label>
          <input
            type="text"
            placeholder="Task Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Task Description:</label>
          <textarea
            placeholder="Task Description"
            minLength="20"
            maxLength="200"
            required
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div>
          <label>Due Date:</label>
          <input
            type="date"
            required
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div>
          <label>Assigned To:</label>
          <select
            required
            value={assigedTo}
            onChange={(e) => setAssigedTo(e.target.value)}
          >
            <option value="">Select Employee</option>
            <option value="John Doe">John Doe</option>
            <option value="Jane Smith">Jane Smith</option>
            <option value="Mark Wilson">Mark Wilson</option>
          </select>
        </div>
        <button type="submit">Assign Task</button>
      </form>
    </div>
  );
}

export default AdminForm;
