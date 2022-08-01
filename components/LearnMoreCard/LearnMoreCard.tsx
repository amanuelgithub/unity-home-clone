import React from "react";
import styles from "./LearnMoreCard.module.css";
import { BsArrowRight } from "react-icons/bs";

export function LearnMoreCard({
  icon,
  title,
  body,
  moreLink,
  btnText = undefined,
}) {
  return (
    <div className="flex p-3 my-8 bg-slate-100 rounded-md">
      <div className="">{icon}</div>

      <div className="px-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className={`text-xs text-gray-500`}>{body}</div>
      </div>

      <div className="flex justify-center items-center w-full text-blue-500 font-semibold px-2">
        <a
          href={moreLink}
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center align-middle px-1 pb-1 text-sm hover:bg-blue-100 hover:rounded-sm"
        >
          <p className="m-0 p-0">{`${btnText ? btnText : "Learn More"}`}</p>
          <BsArrowRight className="mt-1.5 ml-1" />
        </a>
      </div>
    </div>
  );
}
