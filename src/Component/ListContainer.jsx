import React, { useState } from "react";
import Container from "./Container";
import ListButton from "./ListButton";

const ListContainer = () => {
  // useState
  const [leftArray, setleftArray] = useState([
    {
      id: 1,
      checked: true,
      itemName: "HTML",
    },
    {
      id: 2,
      checked: true,
      itemName: "CSS",
    },
    {
      id: 3,
      checked: true,
      itemName: "JS",
    },
    {
      id: 4,
      checked: true,
      itemName: "REACT",
    },
  ]);
  const [rightArray, setrightArray] = useState([
    {
      id: 1,
      checked: true,
      itemName: "Angular",
    },
    {
      id: 2,
      checked: true,
      itemName: "Vue",
    },
    {
      id: 3,
      checked: true,
      itemName: "TS",
    },
    {
      id: 4,
      checked: true,
      itemName: "Tailwind",
    },
  ]);

  function rightAll() {
    setrightArray([...rightArray, ...leftArray]);
    setleftArray([]);
  }
  function leftAll() {
    setleftArray([...rightArray, ...leftArray]);
    setrightArray([]);
  }

  return (
    <div className="flex justify-center p-2">
      <Container language={leftArray} />
      <ListButton rightAll={rightAll} leftAll={leftAll} />
      <Container language={rightArray} />
    </div>
  );
};

export default ListContainer;
