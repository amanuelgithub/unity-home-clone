import React from "react";

export default function NavItem({ children, href }) {
  return (
    <div>
      <a href={href} className="hover:text-blue-500 hover:underline">
        {children}
      </a>
    </div>
  );
}
