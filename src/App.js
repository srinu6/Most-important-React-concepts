import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [subscribe, setSubscribe] = useState(false);

  const onClickHandler = () => {
    setSubscribe(!subscribe);
  };

  return (
    <div className="container">
      <img
        alt="Rowdy coder"
        src={require("./logo.png")}
        width="100"
        height="100"
      />
      <button className="subscribe-button" onClick={() => onClickHandler()}>
        {subscribe ? "Subscribed" : "Subscribe"}
      </button>
    </div>
  );
};
export default App;
