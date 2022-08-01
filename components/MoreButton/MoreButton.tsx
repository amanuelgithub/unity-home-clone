import React from "react";

export function MoreButton({ children, icon, moreLink }) {
  return (
    <div className="my-4 w-full  sm:w-fit">
      <a href={moreLink} target="_blank" rel="noreferrer">
        <button
          className="bg-sky-500 px-4 py-1.5 text-sm text-white
            font-semibold rounded m-0 p-0 w-full"
        >
          <div className="m-0 p-0 flex justify-center items-center hover:border-b hover:">
            <span className=" mr-1">{children}</span>
            <span className="mt-1">{icon}</span>
          </div>
        </button>
      </a>
    </div>
  );
}
