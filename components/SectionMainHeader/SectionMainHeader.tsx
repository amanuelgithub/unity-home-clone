import React from "react";
import styles from "./SectionMainHeader.module.css";

export function SectionMainHeader({
  title,
  titleColor = undefined,
  description,
}) {
  return (
    <div className={`${styles.hero} mt-7 mb-3`}>
      <h1
        className="text-2xl font-semibold my-1"
        style={{ color: `${titleColor ? titleColor : "black"}` }}
      >
        {title}
      </h1>
      <h2 className="text-lg">{description}</h2>
    </div>
  );
}
