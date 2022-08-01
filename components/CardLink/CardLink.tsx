import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

export function CardLink({ href, icon, title }) {
  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };
  return (
    <div className="block">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-block px-5 py-4 rounded hover:bg-slate-100"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center gap-3 ">
          <div className="text-2xl">
            <span className="font-extralight">{icon}</span>
          </div>
          <div
            className={`text-sm font-semibold ${
              hovering ? "underline" : "no-underline"
            }`}
          >
            {title}
          </div>
          {/* some javascript detection */}
          <div className={`${hovering ? "visible" : "invisible"}`}>
            <span>
              <BsArrowRight />
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
