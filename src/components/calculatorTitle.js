import React from "react";

// Беремо назву як props.value.
const CalculatorTitle = props => {
  return <div className="calculator-title">{props.value}</div>;
};

export default CalculatorTitle;
