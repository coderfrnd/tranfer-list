import React from "react";

const ListButton = ({
  rightAll,
  leftAll,
  handleLeftToRight,
  handleRightToLeft,
  leftDisabledStatus = false,
  rightDisabledStatus = false,
  leftDisableOnly = false,
  rightDisableOnly = false,
}) => {
  console.log(leftDisableOnly, rightDisableOnly);

  return (
    <div className="border flex flex-col w-[200px]">
      <button
        className={` border cursor-pointer ${
          leftDisableOnly
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-gray-200"
        }
      `}
        onClick={handleRightToLeft}
        disabled={leftDisableOnly}
      >
        left
      </button>
      <button
        className={` border cursor-pointer ${
          rightDisableOnly
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-gray-200"
        }
      `}
        onClick={handleLeftToRight}
        disabled={rightDisableOnly}
      >
        right
      </button>
      <button
        className={` border cursor-pointer ${
          rightDisabledStatus
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-gray-200"
        }
      `}
        onClick={leftAll}
      >
        leftAll
      </button>
      <button
        className={` border cursor-pointer ${
          leftDisabledStatus
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-gray-200"
        }
      `}
        onClick={rightAll}
      >
        rightAll
      </button>
    </div>
  );
};

export default ListButton;
