import "./inputOption.css";

import React from "react";

function InputOption({ Icon, title, color, onClick }) {
  return (
    <div className="inputOption" onClick={onClick} >
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
