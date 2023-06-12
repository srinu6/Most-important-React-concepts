import React, { useState, Component } from "react";

import "./App.css";

const InputComponent = (handleSetInputText, inputText) => {
  const [finalSum, setFinalSum] = useState("");

  const sendData = () => {
    handleSetInputText && handleSetInputText(finalSum);
  };

  return (
    <div className="font-color">
      <input
        type="text"
        value={finalSum}
        onChange={(e) => {
          setFinalSum(e.target.value);
          sendData();
        }}
        placeholder="text box"
      />
    </div>
  );
};
export default InputComponent;
