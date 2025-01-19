import React from "react";
import List from "./List";

function PackingList({ items, onClearList, onRemoveListItem, onPacked }) {
  return (
    <div className="container my-5 d-flex flex-column" style={{height:"350px"}}>
      
      <div className="d-flex flex-column flex-grow-1">
        
        <ul className="list-group d-flex flex-column flex-sm-row flex-wrap gap-4 mb-4 w-100">
          {items?.map((item) => (
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
          <select className="form-select w-auto">
            <option>Sort by Input</option>
            <option>Sort by Description</option>
            <option>Sort by Quantity</option>
          </select>
        </div>

        <button className="btn btn-danger" onClick={onClearList}>Clear</button>
      </div>
      
    </div>
  );
}

export default PackingList;
