import React from "react"; // Import React (Mandatory Step)
  
// Create Functional Component.
// Takes title as props.value.
const Title = (props) => {
    return (
    <div className="calculator-title">{props.value}</div>
    );
};
export default Title; // Export Calculator Title