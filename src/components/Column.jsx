import React from "react";

const ColumnBlock = ({ columnTitle, children }) => {
  return (
    <div className="w-full p-2 m-2 bg-green-100 rounded-sm">
      <h4 className="text-xl sm:text-2xl text-gray-600">{columnTitle}</h4>
      {children}
    </div>
  );
};

export default ColumnBlock;
