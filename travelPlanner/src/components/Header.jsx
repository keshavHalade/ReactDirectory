import React from "react";
import Logo from "./Logo";
import Form from "./Form";

function Header({ onSetListItem }) {
  return (
    <div className="d-flex px-4 shadow">
      <h5 className="my-4">What do you need for your 😍 trip?</h5>
      <div className="ms-auto">
        <Form onSetListItem={onSetListItem} />
      </div>
    </div>
  );
}

export default Header;
