import React from "react";
import { Outlet } from "react-router-dom";
import AppNavBar from "../components/AppNavBar";

function AppLayout() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <AppNavBar />
      <main className="flex-grow-1 bg-secondary">
        <Outlet />
      </main>

      <footer className="bg-dark text-white py-3 mt-auto">
        <div className="container text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Keshav Halade. All rights reserved
            😂😁😒.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default AppLayout;
