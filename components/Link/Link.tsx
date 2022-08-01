import React from "react";

export function Link({ children, href }) {
  return (
    <a
      href={href}
      className="text-sm text-gray-700 mr-1.5 my-1.5 font-semibold underline bg-blue-100 rounded pb-0.5 hover:bg-blue-200"
    >
      {children}
    </a>
  );
}
