import React from "react";

const Container = ({ language, toggleCheckBox }) => {
  return (
    <div className="border w-[600px]">
      <ul className="p-2">
        {language.map((ele) => (
          <li key={ele.id} className="p-4">
            <label>
              <input
                className="m-4"
                type="checkbox"
                checked={ele.checked}
                onChange={() => toggleCheckBox(ele.id)}
              />
              {ele.itemName}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Container;
