import React from "react";

function List({ item, onRemove, onPacked}) {  
  return (
    <li className="mx-2 p-2 list-group-item border-0">
      <input
        type="checkbox"
        className="me-2"
        value={item.packed}
        onChange={() => onPacked(item.id)}
      />
      <span
        className="form-label me-2 fs-5"
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >
       {item.description} ({item.quantity})
      </span>
      <button className="btn me-2" onClick={() => onRemove(item.id)}>
        ❌
      </button>
    </li>
  );
}

export default List;
