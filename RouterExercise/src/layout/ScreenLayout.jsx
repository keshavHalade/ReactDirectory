import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
function ScreenLayout() {
  return (
    <div>
        <Navbar />

        <div className="bg-secondary">
            <Outlet />
        </div>
    </div>
  );
}

export default ScreenLayout;
