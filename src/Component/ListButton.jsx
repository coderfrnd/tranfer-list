import React from "react";

const ListButton = ({
  rightAll,
  leftAll,
  handleLeftToRight,
  handleRightToLeft,
}) => {
  return (
    <div className="border flex flex-col w-[200px]">
      <button className="border cursor-pointer p-2" onClick={handleRightToLeft}>
        left
      </button>
      <button className="border cursor-pointer p-2" onClick={handleLeftToRight}>
        right
      </button>
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
