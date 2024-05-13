import React from "react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-20 h-20 border-2 border-opacity-20 rounded-full border-t-blue-500 animate-spin"></div>
    </div>
  );
}
