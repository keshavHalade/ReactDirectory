import React from "react";
import img from '../assets/react.svg'

function Logo() {
  return (
    <h1 className="text-center mt-2 text-success p-4 shadow">
      <img src={img} style={{width:"50px", margin:"0 5px"}}/>
      Travel Planner 👜
    </h1>
  );
}

export default Logo;
