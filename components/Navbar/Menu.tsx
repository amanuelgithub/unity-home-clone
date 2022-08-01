import React from "react";
import { MenuItem } from "./MenuItem";

export default function Menu({ isHoverd, handleSetTrue, handleSetFalse }) {
  return (
    <div>
      {isHoverd && (
        <div
          className="absolute left-0 top-5  bg-black w-72 py-3 px-1 text-sm z-50"
          onMouseOver={handleSetTrue}
          onMouseOut={handleSetFalse}
        >
          <ul className="list-none">
            <MenuItem href={`#`}>Unity Docs Home</MenuItem>
            <MenuItem href={`#`}>Unity Editor Manual</MenuItem>
            <MenuItem href={`#`}>Unity Gaming Service Docs</MenuItem>
            <MenuItem href={`#`}>Unity Gaming Service REST API Doc</MenuItem>
          </ul>
        </div>
      )}
    </div>
  );
}
