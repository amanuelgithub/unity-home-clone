import React from "react";

export function SectionSubHeader({ icon, iconColor, title, description }) {
  return (
    <div className="my-4">
      <div className="flex items-center gap-1 font-semibold mb-1">
        <div className="text-2xl" style={{ color: `${iconColor}` }}>
          {icon}
        </div>
        <h2 className="text-lg">{title}</h2>
      </div>

      <div className="text-sm text-gray-500 font-normal">{description}</div>
    </div>
  );
}
