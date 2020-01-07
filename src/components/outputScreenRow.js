
import React from "react";

// Вводяться цифри і виводиться результат.
const OutputScreenRow = props => {
  return (
    <div className="screen-row">
      <input type="text" readOnly value={props.value} />
    </div>
  );
};

export default OutputScreenRow;
