import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Goup } from "../Goup";
import { Outlet } from "react-router-dom";

export const Layout = ({ children }) => {
  return (
    <div>
      {/* NAvBAR */}

      <div className="wrapper">
        <Navbar />

        <main className="main-body">
          <Outlet />
        </main>

        {/* Footer */}

        <Footer />
        <Goup />
      </div>
    </div>
  );
};
