import React, { useState } from "react";
import List from "./List";

function PackingList({ items, onClearList, onRemoveListItem, onPacked }) {
  const [filter, setFilter] = useState("input");

  const sortedItems = [...items].sort((a, b) => {
    if (filter === "description") {
      return a.description.localeCompare(b.description);
    } else if (filter === "quantity") {
      return a.quantity - b.quantity;
    }
    return 0;
  });

  return (
    <div
      className="container my-5 d-flex flex-column"
      style={{ height: "350px" }}
    >
      <div className="d-flex flex-column flex-grow-1">
        <ul className="list-group d-flex flex-column flex-lg-row flex-wrap gap-4 mb-4 w-100">
          {sortedItems?.map((item) => (
            <List
              key={item.id}
              item={item}
              onRemove={onRemoveListItem}
              onPacked={onPacked}
            />
          ))}
        </ul>
      </div>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <div className="btn-group">
          <select
            className="form-select w-auto"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="input">Sort by Input</option>
            <option value="description">Sort by Description</option>
            <option value="quantity">Sort by Quantity</option>
          </select>
        </div>

        <button className="btn btn-danger" onClick={onClearList}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default PackingList;
