import React from "react";

const ListButton = ({ rightAll, leftAll }) => {
  return (
    <div className="border flex flex-col w-[200px]">
      <button className="border cursor-pointer p-2">left</button>
      <button className="border cursor-pointer p-2">right</button>
      <button className="border cursor-pointer p-2" onClick={leftAll}>
        leftAll
      </button>
      <button className="border cursor-pointer p-2" onClick={rightAll}>
        rightAll
      </button>
    </div>
  );
};

export default ListButton;
