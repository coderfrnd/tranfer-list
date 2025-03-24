import React, { useState } from "react";
import Container from "./Container";
import ListButton from "./ListButton";

const ListContainer = () => {
  const [leftArray, setLeftArray] = useState([
    { id: 1, checked: false, itemName: "HTML" },
    { id: 2, checked: false, itemName: "CSS" },
    { id: 3, checked: false, itemName: "JS" },
    { id: 4, checked: false, itemName: "REACT" },
  ]);

  const [rightArray, setRightArray] = useState([
    { id: 5, checked: false, itemName: "Angular" },
    { id: 6, checked: false, itemName: "Vue" },
    { id: 7, checked: false, itemName: "TS" },
    { id: 8, checked: false, itemName: "Tailwind" },
  ]);
  const [leftRightDisable, setleftRightDisable] = useState(false);
  function rightAll() {
    setRightArray([...rightArray, ...leftArray]);
    setLeftArray([]);
  }
  function leftAll() {
    setLeftArray([...leftArray, ...rightArray]);
    setRightArray([]);
  }
  function handleLeftToRight() {
    const checkedItems = leftArray.filter((ele) => ele.checked);
    const remainingItems = leftArray.filter((ele) => !ele.checked);
    setLeftArray(remainingItems);
    setRightArray([...rightArray, ...checkedItems]);
  }
  function handleRightToLeft() {
    const checkedItems = rightArray.filter((ele) => ele.checked);
    const remainingItems = rightArray.filter((ele) => !ele.checked);
    setRightArray(remainingItems);
    setLeftArray([...leftArray, ...checkedItems]);
  }
  function toggleCheckBox(id, isLeft) {
    if (isLeft) {
      setLeftArray((prev) =>
        prev.map((item) => {
          if (item.id == id) {
            return { ...item, checked: !item.checked };
          }
          return item;
        })
      );
    } else {
      setRightArray((prev) =>
        prev.map((item) => {
          if (item.id == id) {
            return { ...item, checked: !item.checked };
          }
          return item;
        })
      );
    }
  }

  return (
    <div className="flex justify-center p-2">
      <Container
        language={leftArray}
        toggleCheckBox={(id) => toggleCheckBox(id, true)}
      />
      <ListButton
        rightAll={rightAll}
        leftAll={leftAll}
        handleLeftToRight={handleLeftToRight}
        handleRightToLeft={handleRightToLeft}
        leftDisabledStatus={leftArray.length == 0 ? true : false}
        rightDisabledStatus={rightArray.length == 0 ? true : false}
        leftDisableOnly={leftArray.find((ele) => ele.checked === true)}
        rightDisableOnly={rightArray.find((ele) => ele.checked === true)}
      />
      <Container
        language={rightArray}
        toggleCheckBox={(id) => toggleCheckBox(id, false)}
      />
    </div>
  );
};

export default ListContainer;
