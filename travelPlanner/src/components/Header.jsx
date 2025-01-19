import React from 'react';
import Logo from './Logo';
import Form from './Form';

function Header({onSetListItem}) {
  return (
    <div className="rounded p-3">
      <div className="row align-items-center">
        {/* Logo Section */}
        <div className="col-auto">
          <Logo />
        </div>

        {/* Form Section */}
        <div className="col">
          <Form onSetListItem={onSetListItem} />
        </div>
      </div>
    </div>
  );
}

export default Header;
