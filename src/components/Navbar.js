import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-center mt-8">
      <Link to="/">
        <h1 className="text-gray-600 text-3xl pl-2">MovieDR</h1>
      </Link>
    </nav>
  );
}
export default Navbar;
