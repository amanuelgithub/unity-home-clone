import React from "react";

export function MenuItem({ children, href }) {
  return (
    <li className="py-3">
      <a href={href} className="hover:text-blue-500 hover:underline px-2 py-2">
        {children}
      </a>
    </li>
  );
}
