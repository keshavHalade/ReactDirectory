import React, {useState } from "react";

function Form({ onSetListItem }) {
  const [formData, setFormData] = useState({
    description: "",
    packed: false,
    quantity: "1",
    id: Date.now(),
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.description.trim()) {
      alert("Please enter an item description.");
      return;
    }

    onSetListItem(formData);

    // Reset the form
    setFormData({
      description: "",
      packed: false,
      quantity: "1",
      id: Date.now(),
    });
  }

  return (
    <div className="container my-4">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-auto">
          <select
            className="form-select"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <div className="col-auto flex-grow-1">
          <input
            type="text"
            placeholder="Add item..."
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="col-auto">
          <button type="submit" className="btn btn-success">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
