import React from "react";
import { Link } from "react-scroll";

export function ScrollLink({ children }) {
  return (
    <>
      <Link
        to="real-time-3d-creation"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        className="hover:text-gray-500"
      >
        {children}
      </Link>
    </>
  );
}
