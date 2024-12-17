import React from "react";

export default function Search({ value, updateSearchTxt }) {
  return (
    <div className="w-[40%] bg-white rounded-3xl px-3 py-1">
      <input
        className="w-full outline-none text-gray-700"
        placeholder="Search for a publisher site"
        value={value}
        onChange={updateSearchTxt}
      />
    </div>
  );
}
