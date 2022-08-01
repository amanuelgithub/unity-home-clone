import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";

export function SearchInput() {
  const [isFocused, setIsFocused] = useState(true);
  const handleInputFocus = () => {
    setIsFocused(false);
    console.log(isFocused);
  };

  const handleInputBlur = () => {
    setIsFocused(true);
    console.log(isFocused);
  };

  return (
    <div className="relative">
      <div
        className={`flex absolute inset-y-0 left-0 items-center px-4 text-lg 
         ${isFocused ? "text-gray-400" : "text-blue-500"}`}
      >
        <HiSearch />
      </div>
      <input
        type="text"
        placeholder="Search in this page"
        className="border-none rounded-lg w-full outline-none
        focus:outline-none focus:shadow-none 
        placeholder:text-sm 
        px-12 py-3 bg-slate-50"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </div>
  );
}
